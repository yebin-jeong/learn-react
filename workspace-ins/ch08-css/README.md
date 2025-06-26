# 8장 리액트에서 CSS 사용
* 코드 실행(GitHub Page): <https://febc-13.github.io/React/workspace-ins/index.html#08>

# 1 기본 CSS 적용 방법
* CSS 파일을 React 컴포넌트에서 직접 import 해서 사용
* 기본적인 사용 방법이며, 규모가 작은 프로젝트에서 간편하게 사용
```tsx
import './App.css';

function App(){
  return (
    <>
      <h1>CSS 사용</h1>
      <button type="button" className="button">그냥 버튼</button>
      <button type="button" className="button blue-red-btn">파란 배경의 빨간 글자</button>
      <button type="button" className="button yellow-red-btn">노란 배경의 빨간 글자</button>
      <button type="button" className="button gray-blue-btn">회색 배경의 파란 글자</button>
    </>
  );
}
```

# 2 CSS 모듈
* 프로젝트 규모가 커지면서 여러개의 CSS 파일을 사용하다 보면 동일한 이름의 클래스가 중복 정의될 수 있음.
* 이때, 중복된 클래스가 적용된 리액트 엘리먼트는 여러 클래스에서 정의한 스타일이 다 적용되면서 원치 않는 스타일을 가질 수 있음.
* CSS 모듈을 사용하면 각 CSS 파일의 클래스 값을 중복되지 않는 고유한 이름으로 만들어 주기 때문에 클래스명의 중복을 방지할 수 있음.
* 참고: https://github.com/css-modules/css-modules

## 2.1 장점
* 동일한 클래스를 중복되게 작성해서 발생하는 스타일의 불일치 방지
* 클래스명을 모듈 내에서만 중복되지 않게 작성하면 되므로 클래스명 네이밍 고민이 줄어듬
* 보통 컴포넌트당 CSS 모듈을 작성하므로 스타일을 유지보수하기 편해짐

## 2.2 사용 방법
### 2.2.1 CSS 파일명
* css 파일 확장자 앞부분에 .module을 추가
  ```
  App.module.css
  ```

### 2.2.2 CSS 모듈 파일 import
```tsx
import styles from './App.module.css';
```

### 2.2.3 스타일 적용 예시
* App.module.css
  ```css
  .title {
    color: blue;
    font-size: 24px;
    font-weight: bold;
  }

  .button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
  }

  .primary {
    background-color: #007bff;
    color: white;
  }

  /* 케밥케이스 클래스명 예시 */
  .button-large {
    padding: 12px 24px;
    font-size: 18px;
    border-radius: 6px;
  }

  .text-warning {
    color: #ff6b35;
    font-weight: bold;
    font-size: 14px;
  }
  ```

* App.tsx
  ```tsx
  function App(){
    return (
      <>
        <h1 className={styles.title}>CSS 모듈 사용</h1>
        <button className={styles.button}>기본 버튼</button>
        <button className={`${styles.button} ${styles.primary}`}>프라이머리 버튼</button>
        <button className={styles['button-large']}>큰 버튼</button>
        <p className={styles['text-warning']}>경고 텍스트</p>
      </>
    );
  }
  ```

## 2.3 VSCode의 CSS Modules 확장 프로그램
* CSS 모듈 사용시 클래스명 자동완성 지원
* https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules

# 3 CSS-in-JS
* 자바스크립트 파일 안에서 스타일을 정의하고 컴포넌트에서 사용하는 방식
* 대표적으로 styled-components, Emotion 등이 있음

## 3.2 Styled Components
* 대표적인 CSS-in-JS 라이브러리
* 참고: https://styled-components.com/docs

### 3.2.1 장점
* 다른 컴포넌트와 CSS 클래스명 중복을 고려할 필요가 없음
  - 고유한 클래스 이름을 자동으로 생성
* JS 코드의 변수 값을 CSS 스타일링에 사용할 수 있기 때문에 동적으로 스타일링 가능
  - props, state 등을 이용해서 스타일링
* 컴포넌트와 스타일이 결합되어 있기 때문에 컴포넌트 단위로 스타일을 수정하기 용이함
* vender prefix가 자동으로 추가됨

### 3.2.2 사용 방법
* 설치
  ```
  npm i styled-components
  ```

### 3.2.3 사용 예시
* Button.tsx
  ```tsx
  import styled from 'styled-components';

  const StyledButton = styled.button`
    background-color: ${ props => props['backgroundColor'] || 'white' };
    border: none;
    color: ${ props => props.color || 'black' };
    padding: 6px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 6px;
  `;

  function Button({ children, ...rest }){
    return <StyledButton { ...rest }>{ children }</StyledButton>
  }

  export default Button;
  ```

# 4 Tailwind CSS
* 참고: https://tailwindcss.com

## 4.1 Tailwind CSS란?
* utility-first CSS framework
* 미리 정의된 CSS 클래스를 이용해서 스타일링을 할 수 있는 프레임워크
* CSS 파일을 따로 만들 필요 없이 제공되는 클래스를 HTML 태그에 직접 지정

## 4.2 장점
* 개발 생산성: 개발자가 CSS 클래스를 정의할 필요 없이 미리 정의된 클래스를 사용하기 때문에 개발 속도와 생산성을 높일 수 있음
* 재사용성: 재사용 가능한 클래스가 제공되므로 동일한 클래스를 여러 엘리먼트에 사용해서 일관된 디자인 구축
* 유연성: 많은 유틸리티 클래스를 제공하고 커스터마이징이 가능
* 가독성: 클래스 이름이 직관적이라서 가독성이 높음
* 파일 크기: 사용하는 클래스만 포함하여 최적화된 CSS 생성

## 4.3 사용 방법
### 4.3.1 설치

- tailwindcss를 Vite 플러그인으로 설치

```sh
npm install -D tailwindcss @tailwindcss/vite
```

### 4.3.2 Vite 플러그인 구성

- vite.config.ts

```js
......
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  ......
  plugins: [
    ......
    tailwindcss(),
  ],
});
```

### 4.3.3 Tailwind를 사용할 css 파일에 import 추가

- src/index.css

```css
@import 'tailwindcss';
```

### 4.3.4 VSCode 플러그인

- Tailwind CSS IntelliSense
  - <https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss>
  - VSCode에서 tainwindcss 관련 자동 완성, 구문 강조, 린팅 같은 기능 제공
  - 마우스 오버시 실제 적용되는 CSS가 툴팁으로 표시

### 3.4.5 사용 예시
```tsx
function Button({ children, type="button", color='blue', size='md', ...rest }){
  let btnColor = {
    gray: `bg-gray-500`,
    blue: `bg-blue-500`,
    red: `bg-red-500`,
  };
  let btnSize = {
    sm: `py-1 px-2 text-sm`,
    md: `py-2 px-4 text-base`,
    lg: `py-2 px-6 text-lg`
  };

  return <button type={ type } className={`${ btnColor[color] } ml-2 hover:bg-blue-600 text-white font-bold ${btnSize[size]} rounded`} { ...rest }>{ children }</button>;
}

export default Button;
```


