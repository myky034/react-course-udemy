export default function Tab({
  children,
  buttons,
  buttonsContainer,
  ButtonsContainer,
}) {
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* <menu>{buttons}</menu> */}
      {children}
    </>
  );
}
