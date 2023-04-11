import { useRecordContext } from "react-admin";
import get from 'lodash/get';
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
interface MyUrlFieldProps {
  source: string;
}

const MyUrlField: React.FC<MyUrlFieldProps> = ({ source }) => {
  const record = useRecordContext();
  const value = get(record, source);

  return value ?( 
    <Link href={value} sx={{ textDecoration: "none" }}>
   {value}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
 ): null;
};

export default MyUrlField;