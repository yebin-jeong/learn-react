function Header() {
  console.log("\tHeader 호출됨");
  return (
    // JSX -> babel -> JS
    <header>
      <h1>10 Button 컴포넌트에 Props 전달</h1>
    </header>
  );
}

export default Header;
