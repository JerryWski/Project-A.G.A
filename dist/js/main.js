const navList=document.querySelector(".navbar__list"),navLinks=document.querySelectorAll(".navbar__list-item"),linksSelect=document.querySelectorAll(".links"),hamburgerBtn=document.querySelector(".hamburger"),footerYear=document.querySelector(".footer_year"),toggleHamburger=(console.log(footerYear),()=>{hamburgerBtn.classList.toggle("is-active"),navList.classList.toggle("active"),document.body.classList.toggle("sticky-body"),handleNavLinksAnimate()}),removeSticky=()=>{document.body.classList.remove("sticky-body"),navList.classList.remove("active"),hamburgerBtn.classList.remove("is-active")},handleNavLinksAnimate=()=>{let t=0;linksSelect.forEach(e=>{e.classList.toggle("links--animation"),e.style.animationDelay="."+t+"s",t++})},currentYear=()=>{var e=(new Date).getFullYear();footerYear.innerHTML="Copyright © "+e};currentYear(),hamburgerBtn.addEventListener("click",toggleHamburger),navLinks.forEach(e=>{e.addEventListener("click",removeSticky)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfX2xpc3RcIik7XHJcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXJfX2xpc3QtaXRlbVwiKTtcclxuY29uc3QgbGlua3NTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtzXCIpO1xyXG5jb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfeWVhcicpXHJcbmNvbnNvbGUubG9nKGZvb3RlclllYXIpO1xyXG5cclxuY29uc3QgdG9nZ2xlSGFtYnVyZ2VyID0gKCkgPT4ge1xyXG4gIGhhbWJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIG5hdkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdGlja3ktYm9keVwiKTtcclxuICBoYW5kbGVOYXZMaW5rc0FuaW1hdGUoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVN0aWNreSA9ICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktYm9keVwiKTtcclxuICBuYXZMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaGFtYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVOYXZMaW5rc0FuaW1hdGUgPSAoKSA9PiB7XHJcbiAgbGV0IGRlbGF5VGltZSA9IDA7XHJcblxyXG4gIGxpbmtzU2VsZWN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImxpbmtzLS1hbmltYXRpb25cIik7XHJcblxyXG4gICAgaXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IFwiLlwiICsgZGVsYXlUaW1lICsgXCJzXCI7XHJcbiAgICBkZWxheVRpbWUrKztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnJlbnRZZWFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgZm9vdGVyWWVhci5pbm5lckhUTUwgPSBcIkNvcHlyaWdodCDCqVwiICsgXCIgXCIgKyB5ZWFyO1xyXG59O1xyXG5cclxuY3VycmVudFllYXIoKTtcclxuXHJcbmhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGFtYnVyZ2VyKTtcclxubmF2TGlua3MuZm9yRWFjaCgobGlua3MpID0+IHtcclxuICBsaW5rcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlU3RpY2t5KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJuYXZMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlua3NTZWxlY3QiLCJoYW1idXJnZXJCdG4iLCJmb290ZXJZZWFyIiwidG9nZ2xlSGFtYnVyZ2VyIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJvZHkiLCJoYW5kbGVOYXZMaW5rc0FuaW1hdGUiLCJyZW1vdmVTdGlja3kiLCJyZW1vdmUiLCJsZXQiLCJkZWxheVRpbWUiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJjdXJyZW50WWVhciIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3MiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVVDLFNBQVNDLGNBQWMsZUFBZSxFQUNoREMsU0FBV0YsU0FBU0csaUJBQWlCLG9CQUFvQixFQUN6REMsWUFBY0osU0FBU0csaUJBQWlCLFFBQVEsRUFDaERFLGFBQWVMLFNBQVNDLGNBQWMsWUFBWSxFQUNsREssV0FBYU4sU0FBU0MsY0FBYyxjQUFjLEVBR2xETSxpQkFGTkMsUUFBUUMsSUFBSUgsVUFBVSxFQUVFLEtBQ3RCRCxhQUFhSyxVQUFVQyxPQUFPLFdBQVcsRUFDekNaLFFBQVFXLFVBQVVDLE9BQU8sUUFBUSxFQUNqQ1gsU0FBU1ksS0FBS0YsVUFBVUMsT0FBTyxhQUFhLEVBQzVDRSxzQkFBc0IsQ0FDeEIsR0FFTUMsYUFBZSxLQUNuQmQsU0FBU1ksS0FBS0YsVUFBVUssT0FBTyxhQUFhLEVBQzVDaEIsUUFBUVcsVUFBVUssT0FBTyxRQUFRLEVBQ2pDVixhQUFhSyxVQUFVSyxPQUFPLFdBQVcsQ0FDM0MsRUFFTUYsc0JBQXdCLEtBQzVCRyxJQUFJQyxFQUFZLEVBRWhCYixZQUFZYyxRQUFRLElBQ2xCQyxFQUFLVCxVQUFVQyxPQUFPLGtCQUFrQixFQUV4Q1EsRUFBS0MsTUFBTUMsZUFBaUIsSUFBTUosRUFBWSxJQUM5Q0EsQ0FBUyxFQUNYLENBQUMsQ0FDSCxFQUVNSyxZQUFjLEtBQ2xCLElBQU1DLEdBQU8sSUFBSUMsTUFBT0MsWUFBWSxFQUNwQ25CLFdBQVdvQixVQUFZLGVBQXNCSCxDQUMvQyxFQUVBRCxZQUFZLEVBRVpqQixhQUFhc0IsaUJBQWlCLFFBQVNwQixlQUFlLEVBQ3RETCxTQUFTZ0IsUUFBUSxJQUNmVSxFQUFNRCxpQkFBaUIsUUFBU2IsWUFBWSxDQUM5QyxDQUFDIn0=
