
import { Link } from 'react-router-dom';
interface LinkComponentProps {
    text: string;
    link: string;
  }
export default function LinkComponent({ text, link }: LinkComponentProps) {
    return (<Link className='text-white text-xl' to={link}> {text}</Link>)
}
