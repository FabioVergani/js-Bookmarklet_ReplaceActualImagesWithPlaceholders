(w=>{
	let f=w.BookMarkletId;
	if('function'!==typeof f){
		with(f=w.BookMarkletId=w=>{
			if(allow){
				allow=false;
				const onceEvent=(e,s,c)=>{const f=o=>{e.removeEventListener(s,f);c(o)};e.addEventListener(s,f)},
				onceLoad=(w,c)=>{const d=w.document;if(d.readyState!=='complete'){onceEvent(w,'load',c)}else{c({target:d})}};
				//...
				onceLoad(w,isLoaded=>{
					const d=isLoaded.target,dImages=d.images,dImagesLen=dImages.length;
					if(dImagesLen!==0){
						const w=d.defaultView,console=w.console;
						console.group('found',dImagesLen,'images.');
						let m=w.Array,f=x=>{const a=m(x);a.items=-1;a.__proto__=null;return a},i=dImagesLen,dImagesBroken=f(i),dImagesValid=f(i),dImagesNotDisplayed=f(i);
						f=x=>x.clientWidth!==0 && x.clientHeight!==0 && x.hidden!==true && x.style.visibility!=='hidden';
						while(i!==0){
							const e=dImages[--i];
							m=(e.complete && e.naturalWidth!==0)?((f(e)&&f(e.parentElement))?dImagesValid:dImagesNotDisplayed):dImagesBroken;
							m[++m.items]=e
						};
						f=(m,s)=>{const o=console;o.group(s+':',m.length);o.dir(m);o.groupEnd()};
						m=dImagesBroken;
						i=m.length=++m.items;
						if(i<dImagesLen){
							if(i>0){
								f(m,'broken')
							};
							m=dImagesNotDisplayed;
							i=m.length=++m.items;
							if(i<dImagesLen){
								if(i>0){
									f(m,'not-displayed')
								};
								m=dImagesValid;
								i=m.length=++m.items;
								f(m,'displayed');
								f=null;
								while(i!==0){
									const e=m[--i],s=w.getComputedStyle(e);
									e.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" style="background:#f2f2f2;font:24px/33px sans-serif" width="240" height="159"><g stroke="#949494" stroke-dasharray="7"><line x2="100%" y2="100%"/><line x1="100%" y2="100%"/></g><g text-anchor="middle"><use stroke="#f2f2f2" stroke-width="18" href="#a"/><text id="a" x="50%" y="50%" alignment-baseline="middle">'+s.getPropertyValue('width')+'×'+s.getPropertyValue('height')+'</text><text x="50%" y="80%" fill="#9c9c9c" font-size="18">'+e.naturalWidth+'×'+e.naturalHeight+'</text></g></svg>';
								};
								//..

							}else{
								console.info('all images are not-displayed',m)
							}
						}else{
							console.info('all images are broken',m)
						}
					};
					console.groupEnd();
					allow=true
				})
			}
		}){allow=true}
	};
	f(w)
})(window);

/*
								if(i>0){
									while(i!==0){
										const e=m[--i];//a NotDisplayed image
									};

								};

							m=dImagesValid;
							i=m.length=++m.items;


							m=dImagesNotDisplayed;
							i=m.length=++m.items;
							console.dir(m);

									e.classList.add('not-displayed')


w.getComputedStyle(e).getPropertyValue('visibility')

							let f=w.getComputedStyle;f=null;
e.width===0||e.height===0||e.hidden===true||e.style.visibility==='hidden'||f(e).getPropertyValue('visibility')==='hidden'
*/