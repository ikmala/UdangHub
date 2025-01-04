import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

export const icon = {
  Beranda: (props: any) => <Entypo name="home" size={20} {...props} />,
  Monitor: (props: any) => (
    <FontAwesome5 name="chart-area" size={20} {...props} />
  ),
  Diskusi: (props: any) => <Entypo name="chat" size={20} {...props} />,
  Akun: (props: any) => <FontAwesome5 name="user-alt" size={20} {...props} />,
};
