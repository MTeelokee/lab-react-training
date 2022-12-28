import '../css/boxColor.css'
export default function BoxColor({ r, g, b }) {
  const valueToHex = (c) => {
    let hex = c.toString(16);
    return hex;
  };
  const rgbToHex = (r, g, b) => {
    return valueToHex(r) + valueToHex(g) + valueToHex(b);
  };

  return (
    <>
      <div className='boxcolorCOntainer' style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
        <div>{`rgb(${r},${g},${b})`}</div>
        <div>#{rgbToHex(r, g, b)}</div>
      </div>
    </>
  );
}
