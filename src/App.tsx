import { Layout } from "./components/Layout";
import { Search } from "./components/Search/Search.tsx";
import { useState } from "react";
import { Card } from "./components/Card/Card.tsx";

function App() {
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  return (
    <Layout>
      <Search setSearchResult={setSearchResult}/>
      <div className="flex flex-row flex-wrap justify-center gap-4 px-8">{searchResult.map(result => <Card
        key={result.group} {...result} />)}</div>
      {/*{JSON.stringify(searchResult)}*/}
    </Layout>
  )
}

export default App
