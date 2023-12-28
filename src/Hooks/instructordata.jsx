import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthService } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const instructordata = () => {
  let { user } = useContext(AuthService)
  let [axiosguard] = useAxiosSecure();
  let { data: instructors = [], refetch } = useQuery({
    queryKey: ['instructors', user?.email],
    enabled: !!user?.email && !!localStorage.getItem("summer-token"),
    queryFn: async () => {
      const res = await axiosguard.get(`alluser/${user?.email}`)
      return res.data;
    },
  })
  return [instructors]
}
export default instructordata;
