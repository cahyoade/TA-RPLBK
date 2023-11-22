import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AppContext, Artwork } from "../context/AppContext";
import PaintingCard from "../components/PaintingCard";
import ArtworkDetails from "../components/ArtworkDetails";
import TextInput from "../components/TextInput";
import { Outlet } from "react-router-dom";

type mode = 'list' | 'detail';


function Cataloged() {
  const data = useContext(AppContext).data;
  const [mode, setMode] = useState<mode>('list');
  const [active, setActive] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  function handleSearch(e: React.FormEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement;
    setSearch(element.value);
  }

  function checkSearch(painting: Artwork) {
    if(painting.publishing_verification_level !== 'Web Cataloged'){
      return false;
    }
    if (painting.title.toLowerCase().includes(search.toLowerCase()) || painting.subject_titles.join(' ').toLowerCase().includes(search.toLowerCase())) {
      return true;
    }  else {
      return false;
    }
  }

  return (
    <div className="flex flex-col items-center py-16">
      {
        mode === 'detail' ?
          <div>
            <ArtworkDetails {...data[active]} setMode={setMode}/>
          </div>
          :
          <>
            <p className="font-bold text-4xl mb-12">Cataloged Artworks</p>
            <TextInput name="search" value={search} onChange={handleSearch} className="mb-12 w-full max-w-xl" title="🔎 Search" />
            <div className="flex flex-wrap w-full justify-between px-12">
              <div className="w-80 flex flex-col gap-8">
                {data && data.slice(0, 25).map((painting: Artwork, id) =>
                  checkSearch(painting) &&
                  <div
                    key={id}
                    onClick={() => { setMode('detail'); setActive(id) }}>
                    <PaintingCard {...painting} />
                  </div>)}
              </div>

              <div className="w-80 flex flex-col gap-8">
                {data && data.slice(25, 50).map((painting: Artwork, id) =>
                checkSearch(painting) &&
                  <div
                    key={id}
                    onClick={() => { setMode('detail'); setActive(id + 25) }}>
                    <PaintingCard {...painting} />
                  </div>)}
              </div>

              <div className="w-80 flex flex-col gap-8">
                {data && data.slice(50, 75).map((painting: Artwork, id) =>
                checkSearch(painting) &&
                  <div
                    key={id}
                    onClick={() => { setMode('detail'); setActive(id + 50) }}>
                    <PaintingCard {...painting} />
                  </div>)}
              </div>

              <div className="w-80 flex flex-col gap-8">
                {data && data.slice(75, 100).map((painting: Artwork, id) =>
                checkSearch(painting) &&
                  <div
                    key={id}
                    onClick={() => { setMode('detail'); setActive(id + 75) }}>
                    <PaintingCard {...painting} />
                  </div>)}
              </div>
            </div>
          </>
      }

    </div>
  );
}

export default Cataloged;