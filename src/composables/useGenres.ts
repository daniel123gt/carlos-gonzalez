import axios from "axios";

export const useGenres = ()  => {

  const getGenres = async (): Promise<any> => {
    try {
      const { data, status } = await axios.get('http://localhost:3000/genres');
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
  return { getGenres }
}