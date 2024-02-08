export function padNumber(n) {
  const s = `000${n}`;
  /* return s.substr(s.length - 4); */
  return s.slice(s.length - 4, s.length);
}
interface PropSprites { 
  other: {
    dream_world: {
      official_artwork: { 
        front_default:string  
      }
      front_default:string
    }
  };
  front_default: string;
}

export function getPokemonDefaultImg(sprites:PropSprites) {
  return (
    sprites?.other?.dream_world?.front_default ||
    sprites?.other?.['official-artwork']?.front_default ||
    sprites?.front_default ||
    ''
  );
}