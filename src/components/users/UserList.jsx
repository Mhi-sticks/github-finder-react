import { useContext } from "react"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
import UserSearch from './UserSearch'
import GithubContext from "../context/github/GithubContext"

function UserList() {
const {users,loading} = useContext(GithubContext)

return (
  <div className="container dark:bg-slate-900">
       <UserSearch />
        {
           loading 
           ? <Spinner /> 
           : <ul className="grid grid-cols-1 gap-8 pt-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
               {users.map(user => (
                   <li key={user.id}>
                       <UserItem user={user} />
                   </li>
               ))}
           </ul>
       }

  </div>
 )

   
// if(!loading) {
//     return (
//         <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
//           {users.map((user) => (
//             <UserItem key={user.id} user={user} />
//           ))}
//         </div>
//       )
// }else {
//     return <Spinner />
// }
  
 }

export default UserList
