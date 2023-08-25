import '../public/static/bootstrap.css';
import '../public/static/site.css';

export default function MyApp({Component,pageProp}){
    return <Component {...pageProp} />
}
