interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

function MyLink({ children, to }: MyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본 동작(페이지 이동) 취소
    e.preventDefault();

    // History API를 사용해서 주소 변경과 히스토리에 추가
    history.pushState(null, '', to);

    // 
  };

  return (
    <a href={ to } onClick={ handleClick }>{ children }</a>
  );
}

export default MyLink;