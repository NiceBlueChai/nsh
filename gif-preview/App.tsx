import { Image, mount, signal, Text, View } from "nsh";
import source from "./sample.gif";
const width = signal(192);
const loaded = signal(false);
mount(() => <View class="flex-1">
  <View role="button" testID="enlarge" onPress={() => width.set(1200)}><Text>Enlarge</Text></View>
  <Text>{loaded() ? "Loaded" : "Loading"}</Text>
  <Image src={source} style={{ width: width(), height: width()*920/1600, objectFit: "contain" }} onLoad={() => loaded.set(true)} />
</View>);


