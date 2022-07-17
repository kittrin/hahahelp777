import Main from "../pages/Main";
import JK1 from "../pages/JK1";
import JK2 from "../pages/JK2";
import Choice1 from "../pages/Choice1";
import Choice2 from "../pages/Choice2";
import FirstHata from "../pages/FirstHata";
import TwoHata from "../pages/TwoHata";
import ArendaHata from "../pages/ArendaHata";
import Profile from "../pages/Profile";
import Domofon from "../pages/profilePages/Domofon";
import video from "../pages/profilePages/Video";
import Service from "../pages/profilePages/Service";

export const routes = [
    {path: '/main', component: Main},
    {path: '/jk1', component: JK1},
    {path: '/jk2', component: JK2},
    {path: '/choice1', component: Choice1},
    {path: '/choice2', component: Choice2},
    {path: '/first1', component: FirstHata},
    {path: '/twohata', component: TwoHata},
    {path: '/arenda', component: ArendaHata},
    {path: '/profile', component: Profile},
    {path: '/domofon', component: Domofon},
    {path: '/video', component: video},
    {path: '/service', component: Service}
]