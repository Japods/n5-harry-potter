import React, { useEffect } from "react";
import { useCharacterStore } from "../store/charactersStore";
import CharacterCard from "n5-remote-commons/CardCharacter";

const CharacterList = () => {
  const { characters, fetchCharacters } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div className="grid grid-cols-5 gap-4 ">
      {characters.map((character) => (
        <CharacterCard
          key={character.attributes.id}
          name={character.attributes.name}
          gender={character.attributes.gender}
          species={character.attributes.species}
          movie="Harry Potter"
          image={character.attributes.image}
          link={character.attributes.wiki}
        />
      ))}
    </div>
  );
};

export default CharacterList;
