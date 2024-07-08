import {useQuery} from '@tanstack/react-query';

const fetchPackageData = async () => {
  const response = await fetch('http://18.210.108.177:4003/api/packagelist');
  return response.json();
};

const useGetPackage = () => {
  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ['packageList'],
    queryFn: fetchPackageData,
  });

  return {data, error, isLoading, refetch};
};

export default useGetPackage;

//using React Query but just a simple work so not to use
//use browser fetch api
