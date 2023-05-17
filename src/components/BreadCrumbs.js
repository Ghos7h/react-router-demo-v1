import {
  Link,
  useLocation
} from "react-router-dom"

const BreadCrumbs = () => {

  const location = useLocation();
  console.log(location);
  let currentLinks = '';

  const crumbs = location.pathname.split('/').filter((crumb)=> crumb!=='').map((crumb)=>{
    currentLinks+=`/${crumb}`;
    return(<div className="crumb" key={crumb}>
      <Link to={currentLinks}>{crumb}</Link>
    </div>)
  })


  return (
    <div className="breadcrumbs">{crumbs}</div>
  )
}

export default BreadCrumbs