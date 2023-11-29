
import { useQuery } from '@tanstack/react-query';

import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios()
  const { data:isAdmin } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      
      return res.data?.admin
    }
  })
  return[isAdmin]
};

export default useAdmin;