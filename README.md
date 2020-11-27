
주제: 영화 api를 이용하여 영화 웹사이트를 만들기


개발환경: Vscode, git
실행방법: yarn start 또는 npm start

참고사이트
https://yts.mx/api/v2/list_movies.json?sort_by=rating - 영화 api
https://www.w3schools.com/csSref/css3_pr_background-size.asp - css
http://iconmonstr.com/ - icon svg

<목차>
1. 무엇을 만들었는가?
2. 어떤 식으로 구성하였는가?
3. 무엇을 배웠는가?
4. 고쳐야 할 것은 무엇인가?

1. <무엇을 만들었는가?>
- 영화 Api를 이용하여 웹사이트에 영화정보를 가져오고 styled-components로 styling을 해보았다.

- 아래 그림처럼 index페이지에서 유저는 영화 리스트를 쭈욱 나열해서 볼 수 있다.
- 또한 클릭하면 보다 더 자세한 정보를 조회해서 볼 수 있게끔 구성하였다
- 로딩 중일 때 유저에게 로딩 중이라는 것을 알리기 위하여 로딩중을 구성하였다(제일 아래는 화면이 깜빡거린다)


- styles는 reset css와 global초기 css를 구성하였다
- 규모가 커질 때 개발자가 어떻게하면 관리하기 편할지에 대해서 고민하면서 개발을 하였고, 
styled-components에 대한 장점(재사용성)을 살리기 위한 고민을 해보았다.


2. 어떤 식으로 구성하였는가?

- 우선 규모가 크지 않았기 때문에 components와 routes styles로 크게 3가지를 구분하였다
- components는 공통으로 사용되는 페이지를 사용하였고
- routes는 view단의 logic과 그에대한 css를 구성하였다

3. styled-components를 통한 재사용성이 얼마나 용이한지를 배웠다. 또한 영화 api를 가져오는법을 익숙하게 할 수 있었으며, 역시나 디자인이 정말 어렵다는 것을 다시한 번 뼈저리게 느꼈다.

4. 개선해야할 사항(아쉬운점)
- 현재 코드는 보면 styled-components의 남발이다. 이는 재사용을 충분히 고려하지 못했기에 보다 정밀한 모듈화가 진행된다면 향후 개발시 용이하게 유지보수하며 비용 절감을 할 수 있을 것이라 생각한다.
- api를 불러올 때 고질적인 문제점은 delay시간이 걸린다는 것이다. 이는 유저에게 불편함을 주는데 이를 해결해야 할 방안을 모색 해야한다.

현재 발생하는 bug

- 특정 영화 조회 후 새로고침을 하면 데이터에 대한 정보가 없어 main페이지로 가는 현상 발생(useRef hook을 이용하거나 useEffect 혹은 강제 redirect를 통해 해결 가능 할 것으로 보임)

