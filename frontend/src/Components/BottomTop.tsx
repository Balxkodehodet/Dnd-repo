export default function BottomTop() {

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
    return <>
        <div className="topbottomContainer">
                    <button onClick={scrollToTop} className="totheTop">To the top</button>
                    <button onClick={scrollToBottom} className="totheBottom">To the Bottom</button>
        </div>
    </>
 }