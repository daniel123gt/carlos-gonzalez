import axios from "axios";

type Movie = {
    id: number;
    title: string;
    description: string;
    img: string;
    genre: string;
}

type GetMovieResponse = {
    data: Movie[];
}

export const useMovies = ()  => {

  const getMovies = async (): Promise<any> => {
    try {
      const { data, status } = await axios.get<GetMovieResponse>('http://localhost:3000/movies');
      console.log(status)
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Error: ', error.message);
        return error.message;
      } else {
        console.log('Error inesperado: ', error);
        return 'A ocurrido un error inesperado';
      }
    }
  }
  return { getMovies }
}