import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { Photo } from "../../types/Photo";
import { Album as AlbumType } from "../../types/Album";
import { PhotoItem } from "../../components/PhotoItem";
import "./Album.css";

export const Album = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Photo[]>([]);
  const [albumInfo, setAlbumInfo] = useState<AlbumType>({
    id: 0,
    title: "",
    userId: 0,
  });

  useEffect(() => {
    if (params.id) {
      loadPhotos(params.id);
      loadAlbumInfo(params.id);
    }
  }, []);

  const loadPhotos = async (id: string) => {
    setLoading(true);
    const photos = await api.getPhotosFromAlbum(id);
    setList(photos);
    setLoading(false);
  };

  const loadAlbumInfo = async (id: string) => {
    const albumInfo = await api.getAlbum(id);
    setAlbumInfo(albumInfo);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <button onClick={handleBackButton} className="album-button">
        Back
      </button>

      {loading && "Loading..."}

      <h1 className="album-title">{albumInfo.title}</h1>

      {list.map((item, index) => (
        <PhotoItem key={index} data={item} />
      ))}
    </div>
  );
};
