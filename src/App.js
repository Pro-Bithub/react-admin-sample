// in src/App.tsx
import { Admin, Resource ,CustomRoutes    } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/Users";
import { Dashboard } from "./components/Dashboard";
import UserIcon from "@mui/icons-material/Group";
import { authProvider } from './components/AuthProvider';
import LoginPage from './components/LoginPage';
import MyMenu from './components/MyMenu';
import SettingsPage from './components/SettingsPage';
import SignUpPage from './components/SignupPage';
import Layout from './components/Layout';
import { Chat } from "./components/Chat";
import {Home} from "./components/Home";
import JoinPage from "./components/JoinPage";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin menu={MyMenu}  layout={Layout}   title="VISIOCALL"  authProvider={authProvider}  dataProvider={dataProvider}  dashboard={Dashboard} loginPage={LoginPage}>
 {/* <Resource name="posts" list={PostList}  edit={PostEdit}   create={PostCreate}  icon={PostIcon} /> */}
    <Resource name="users" list={UserList}   icon={UserIcon}  recordRepresentation="name"  />
  
    <CustomRoutes>
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:chatId" element={<Chat/>} />
            <Route path="/join" element={<JoinPage />} />
            
     </CustomRoutes>
     <CustomRoutes noLayout>
            <Route path="/register" element={<SignUpPage />} />
    </CustomRoutes>
  </Admin>
);

export default App;

