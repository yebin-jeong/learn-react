import { Metadata } from "next";

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}
export default function ListPage() {
  return (
    <h1>목록 조회</h1>
  );
}