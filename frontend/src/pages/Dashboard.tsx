import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'

export function Dashboard() {
    const param = useParams();
    const navigate = useNavigate();
    console.log(param);
  return (
    <div>
        Dashboard
        <Button
            onClick={()=>{
                navigate('veb')
            }}
        >
            ok
        </Button>
    </div>
  )
}