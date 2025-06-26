import Button from "@/components/ui/Button";

function App(){
  return (
    <>
      <h1>04 Tailwind CSS</h1>

      <Button type="button">그냥 버튼</Button>
      <Button type="button" bg="blue" color="red">파란 버튼</Button>
      <Button type="submit" bg="gray" color="blue">submit 버튼</Button>

    </>
  );
}

export default App;