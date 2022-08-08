import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hi, I am Daeyeong Park
        </h1>
        <p className="mb-8 leading-relaxed">
          Full-Stack Developer를 꿈꾸는 Junior입니다. 웹 퍼블리싱을 한 경험은
          동아리 웹사이트 뿐이지만 어떤 에러나 오타가 막아도 항상 포기하지 않고
          노력하고 있습니다. 주 언어는 C언어, JAVA, SWIFT로 현재 Vue.JS와
          REACT를 공부중입니다. 이때까지 갈팡질팡 했지만 나중에 멋진 PWA개발자와
          웹개발자가 되지 않을까 정말 기대됩니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="projectBtn">프로젝트 보러가기</button>
          </Link>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            블로그
          </button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
