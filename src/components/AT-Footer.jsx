const d = new Date();

export const ATFooter = () => {
  return (
    <>
      <footer className="footer">
        <p>Derechos Reservados AITUTORES {d.getFullYear()}</p> <p>Powered by Alphaxa</p>
      </footer>
    </>
  );
};
