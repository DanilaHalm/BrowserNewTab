import GoogleSearch from "./components/googleSearch/googleSearch";
import LinkList from "./components/linkList/linkList";
import AppWrapper from "./components/appWrapper/appWrapper";

export default function Home() {
  return (
    <main>
      <AppWrapper>
        <GoogleSearch />
        <LinkList />
      </AppWrapper>
    </main>
  );
}
