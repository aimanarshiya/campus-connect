import { View } from "react-native";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import NoticeCard from "../components/NoticeCard";
import Footer from "../components/Footer";

export default function HomeScreen(){
    return (
        <View>
            <Header/>
            <WelcomeCard />
            <NoticeCard 
                description="4PM Today"
                title="Holiday for Rathaiah's Birthday" />
            <Footer/>
        </View>
    )
}