﻿// JavaScript Document

var sftextDL;
	
function startTextSfDL() {
sftextDL = document.txtBox.box2.value;  
	
sftextDL = sftextDL.replace(/,/g, "￦");
sftextDL = sftextDL.replace(/\./g, "'");
sftextDL = sftextDL.replace(/\(/g, "￫");
sftextDL = sftextDL.replace(/\)/g, "￩");
sftextDL = sftextDL.replace(/%/g, "ￕ");
sftextDL = sftextDL.replace(/\//g, "$");
sftextDL = sftextDL.replace(/–/g, "ￔ");
sftextDL = sftextDL.replace(/\?/g, "ￓ");
sftextDL = sftextDL.replace(/!/g, "ￒ");
sftextDL = sftextDL.replace(/\=/g, "ￏ");
sftextDL = sftextDL.replace(/\'/g, "ￎ");
sftextDL = sftextDL.replace(/\+/g, "ￍ");
sftextDL = sftextDL.replace(/\:/g, "ￌ");
sftextDL = sftextDL.replace(/\÷/g, "ￋ");
sftextDL = sftextDL.replace(/\;/g, "ﾶ");
sftextDL = sftextDL.replace(/ත්‍රෛ/g, "ff;%");
sftextDL = sftextDL.replace(/ශෛ/g, "ffY");
sftextDL = sftextDL.replace(/චෛ/g, "ffp");
sftextDL = sftextDL.replace(/ජෛ/g, "ffc");
sftextDL = sftextDL.replace(/කෛ/g, "ffl");
sftextDL = sftextDL.replace(/මෛ/g, "ffu");
sftextDL = sftextDL.replace(/පෛ/g, "ffm");
sftextDL = sftextDL.replace(/දෛ/g, "ffo");
sftextDL = sftextDL.replace(/තෛ/g, "ff;");
sftextDL = sftextDL.replace(/නෛ/g, "ffk");
sftextDL = sftextDL.replace(/ධෛ/g, "ffO");
sftextDL = sftextDL.replace(/වෛ/g, "ffj");
sftextDL = sftextDL.replace(/ප්‍රෞ/g, "fm%!");
sftextDL = sftextDL.replace(/ෂ්‍යෝ/g, "fIHda");
sftextDL = sftextDL.replace(/ඡ්‍යෝ/g, "fPHda");
sftextDL = sftextDL.replace(/ඪ්‍යෝ/g, "fVHda");
sftextDL = sftextDL.replace(/ඝ්‍යෝ/g, "f>Hda");
sftextDL = sftextDL.replace(/ඛ්‍යෝ/g, "fLHda");
sftextDL = sftextDL.replace(/ළ්‍යෝ/g, "f<Hda");
sftextDL = sftextDL.replace(/ඵ්‍යෝ/g, "fMHda");
sftextDL = sftextDL.replace(/ඨ්‍යෝ/g, "fGHda");
sftextDL = sftextDL.replace(/ශ්‍යෝ/g, "fYHda");
sftextDL = sftextDL.replace(/ක්‍ෂ්‍යෝ/g, "fÌHda");
sftextDL = sftextDL.replace(/බ්‍යෝ/g, "fnHda");
sftextDL = sftextDL.replace(/ච්‍යෝ/g, "fpHda");
sftextDL = sftextDL.replace(/ඩ්‍යෝ/g, "fâHda");
sftextDL = sftextDL.replace(/ෆ්‍යෝ/g, "f*Hda");
sftextDL = sftextDL.replace(/ග්‍යෝ/g, "f.Hda");
sftextDL = sftextDL.replace(/ජ්‍යෝ/g, "fcHda");
sftextDL = sftextDL.replace(/ක්‍යෝ/g, "flHda");
sftextDL = sftextDL.replace(/ල්‍යෝ/g, "f,Hda");
sftextDL = sftextDL.replace(/ම්‍යෝ/g, "fuHda");
sftextDL = sftextDL.replace(/න්‍යෝ/g, "fkHda");
sftextDL = sftextDL.replace(/ප්‍යෝ/g, "fmHda");
sftextDL = sftextDL.replace(/ද්‍යෝ/g, "foHda");
sftextDL = sftextDL.replace(/ස්‍යෝ/g, "fiHda");
sftextDL = sftextDL.replace(/ට්‍යෝ/g, "fgHda");
sftextDL = sftextDL.replace(/ව්‍යෝ/g, "fjHda");
sftextDL = sftextDL.replace(/ත්‍යෝ/g, "f;Hda");
sftextDL = sftextDL.replace(/භ්‍යෝ/g, "fNHda");
sftextDL = sftextDL.replace(/ධ්‍යෝ/g, "fOHda");
sftextDL = sftextDL.replace(/ථ්‍යෝ/g, "f:Hda");
sftextDL = sftextDL.replace(/ෂ්‍යො/g, "fIHd");
sftextDL = sftextDL.replace(/ශ්‍යො/g, "fYHd");
sftextDL = sftextDL.replace(/ඛ්‍යො/g, "fLHd");
sftextDL = sftextDL.replace(/ක්‍ෂ්‍යො/g, "fÌHd");
sftextDL = sftextDL.replace(/බ්‍යො/g, "fnHd");
sftextDL = sftextDL.replace(/ව්‍යො/g, "fjHd");
sftextDL = sftextDL.replace(/ඩ්‍යො/g, "fvHd");
sftextDL = sftextDL.replace(/ෆ්‍යො/g, "f*Hd");
sftextDL = sftextDL.replace(/ග්‍යො/g, "f.Hd");
sftextDL = sftextDL.replace(/ජ්‍යො/g, "fcHd");
sftextDL = sftextDL.replace(/ක්‍යො/g, "flHd");
sftextDL = sftextDL.replace(/ම්‍යො/g, "fuHd");
sftextDL = sftextDL.replace(/ප්‍යො/g, "fmHd");
sftextDL = sftextDL.replace(/ද්‍යො/g, "foHd");
sftextDL = sftextDL.replace(/ස්‍යො/g, "fiHd");
sftextDL = sftextDL.replace(/ට්‍යො/g, "fgHd");
sftextDL = sftextDL.replace(/ව්‍යො/g, "fjHd");
sftextDL = sftextDL.replace(/ත්‍යො/g, "f;Hd");
sftextDL = sftextDL.replace(/භ්‍යො/g, "fNHd");
sftextDL = sftextDL.replace(/ධ්‍යො/g, "fOHd");
sftextDL = sftextDL.replace(/ථ්‍යො/g, "f:Hd");
sftextDL = sftextDL.replace(/ෂ්‍යෙ/g, "fIH");
sftextDL = sftextDL.replace(/ඡ්‍යෙ/g, "fPH");
sftextDL = sftextDL.replace(/ළ්‍යෙ/g, "f<H");
sftextDL = sftextDL.replace(/ණ්‍යෙ/g, "fKH");
sftextDL = sftextDL.replace(/ච්‍යෙ/g, "fpH");
sftextDL = sftextDL.replace(/ල්‍යෙ/g, "f,H");
sftextDL = sftextDL.replace(/න්‍යෙ/g, "fkH");
sftextDL = sftextDL.replace(/ශ්‍යෙ/g, "fYH");
sftextDL = sftextDL.replace(/ඛ්‍යෙ/g, "fLH");
sftextDL = sftextDL.replace(/ක්‍ෂ්යෙ/g, "fÌH");
sftextDL = sftextDL.replace(/බ්‍යෙ/g, "fnH");
sftextDL = sftextDL.replace(/ඩ්‍යෙ/g, "fvH");
sftextDL = sftextDL.replace(/ෆ්‍යෙ/g, "f*H");
sftextDL = sftextDL.replace(/ග්‍යෙ/g, "f.H");
sftextDL = sftextDL.replace(/ජ්‍යෙ/g, "fcH");
sftextDL = sftextDL.replace(/ක්‍යෙ/g, "flH");
sftextDL = sftextDL.replace(/ම්‍යෙ/g, "fuH");
sftextDL = sftextDL.replace(/ප්‍යෙ/g, "fmH");
sftextDL = sftextDL.replace(/ද්‍යෙ/g, "foH");
sftextDL = sftextDL.replace(/ස්‍යෙ/g, "fiH");
sftextDL = sftextDL.replace(/ට්‍යෙ/g, "fgH");
sftextDL = sftextDL.replace(/ව්‍යෙ/g, "fjH");
sftextDL = sftextDL.replace(/ත්‍යෙ/g, "f;H");
sftextDL = sftextDL.replace(/භ්‍යෙ/g, "fNH");
sftextDL = sftextDL.replace(/ධ්‍යෙ/g, "fOH");
sftextDL = sftextDL.replace(/ථ්‍යෙ/g, "f:H");
sftextDL = sftextDL.replace(/ෂ්‍රෝ/g, "fI%da");
sftextDL = sftextDL.replace(/ඝ්‍රෝ/g, "f>%da");
sftextDL = sftextDL.replace(/ශ්‍රෝ/g, "fY%da");
sftextDL = sftextDL.replace(/ක්‍ෂ්‍රෝ/g, "fÌ%da");
sftextDL = sftextDL.replace(/බ්‍රෝ/g, "fn%da");
sftextDL = sftextDL.replace(/ඩ්‍රෝ/g, "fv%da");
sftextDL = sftextDL.replace(/ෆ්‍රෝ/g, "f*%da");
sftextDL = sftextDL.replace(/ග්‍රෝ/g, "f.%da");
sftextDL = sftextDL.replace(/ක්‍රෝ/g, "fl%da");
sftextDL = sftextDL.replace(/ප්‍රෝ/g, "fm%da");
sftextDL = sftextDL.replace(/ද්‍රෝ/g, "føda");
sftextDL = sftextDL.replace(/ස්‍රෝ/g, "fi%da");
sftextDL = sftextDL.replace(/ට්‍රෝ/g, "fg%da");
sftextDL = sftextDL.replace(/ත්‍රෝ/g, "f;%da");
sftextDL = sftextDL.replace(/ශ්‍රො/g, "fY%d");
sftextDL = sftextDL.replace(/ඩ්‍රො/g, "fv%d");
sftextDL = sftextDL.replace(/ෆ්‍රො/g, "f*%d");
sftextDL = sftextDL.replace(/ග්‍රො/g, "f.%d");
sftextDL = sftextDL.replace(/ක්‍රො/g, "fl%d");
sftextDL = sftextDL.replace(/ප්‍රො/g, "fm%d");
sftextDL = sftextDL.replace(/ද්‍රො/g, "fød");
sftextDL = sftextDL.replace(/ස්‍රො/g, "fi%d");
sftextDL = sftextDL.replace(/ට්‍රො/g, "fg%d");
sftextDL = sftextDL.replace(/ත්‍රො/g, "f;%d");
sftextDL = sftextDL.replace(/ශ්‍රේ/g, "fYa%");
sftextDL = sftextDL.replace(/බ්‍රේ/g, "fí%");
sftextDL = sftextDL.replace(/ඩ්‍රේ/g, "fâ%");
sftextDL = sftextDL.replace(/ෆ්‍රේ/g, "f*a%");
sftextDL = sftextDL.replace(/ග්‍රේ/g, "f.a%");
sftextDL = sftextDL.replace(/ක්‍රේ/g, "fla%");
sftextDL = sftextDL.replace(/ප්‍රේ/g, "fma%");
sftextDL = sftextDL.replace(/ද්‍රේ/g, "føa");
sftextDL = sftextDL.replace(/ස්‍රේ/g, "fia%");
sftextDL = sftextDL.replace(/ත්‍රේ/g, "f;a%");
sftextDL = sftextDL.replace(/ධ්‍රේ/g, "fè%");
sftextDL = sftextDL.replace(/ෂ්‍රෙ/g, "fI%");
sftextDL = sftextDL.replace(/ශ්‍රෙ/g, "fY%");
sftextDL = sftextDL.replace(/බ්‍රෙ/g, "fn%");
sftextDL = sftextDL.replace(/ෆ්‍රෙ/g, "f*%");
sftextDL = sftextDL.replace(/ග්‍රෙ/g, "f.%");
sftextDL = sftextDL.replace(/ක්‍රෙ/g, "fl%");
sftextDL = sftextDL.replace(/ප්‍රෙ/g, "fm%");
sftextDL = sftextDL.replace(/ද්‍රෙ/g, "fø");
sftextDL = sftextDL.replace(/ස්‍රෙ/g, "fi%");
sftextDL = sftextDL.replace(/ත්‍රෙ/g, "f;%");
sftextDL = sftextDL.replace(/භ්‍රෙ/g, "fN%");
sftextDL = sftextDL.replace(/ධ්‍රෙ/g, "fO%");
sftextDL = sftextDL.replace(/්‍ය/g, "H");
sftextDL = sftextDL.replace(/්‍ර/g, "%");
sftextDL = sftextDL.replace(/ෂෞ/g, "fI!");
sftextDL = sftextDL.replace(/ඡෞ/g, "fP!");
sftextDL = sftextDL.replace(/ශෞ/g, "fY!");
sftextDL = sftextDL.replace(/බෞ/g, "fn!");
sftextDL = sftextDL.replace(/චෞ/g, "fp!");
sftextDL = sftextDL.replace(/ඩෞ/g, "fv!");
sftextDL = sftextDL.replace(/ෆෞ/g, "f*!");
sftextDL = sftextDL.replace(/ගෞ/g, "f.!");
sftextDL = sftextDL.replace(/ජෞ/g, "fc!");
sftextDL = sftextDL.replace(/කෞ/g, "fl!");
sftextDL = sftextDL.replace(/ලෞ/g, "f,!");
sftextDL = sftextDL.replace(/මෞ/g, "fu!");
sftextDL = sftextDL.replace(/නෞ/g, "fk!");
sftextDL = sftextDL.replace(/පෞ/g, "fm!");
sftextDL = sftextDL.replace(/දෞ/g, "fo!");
sftextDL = sftextDL.replace(/රෞ/g, "fr!");
sftextDL = sftextDL.replace(/සෞ/g, "fi!");
sftextDL = sftextDL.replace(/ටෞ/g, "fg!");
sftextDL = sftextDL.replace(/තෞ/g, "f;!");
sftextDL = sftextDL.replace(/භෞ/g, "fN!");
sftextDL = sftextDL.replace(/ඤෞ/g, "f[!");
sftextDL = sftextDL.replace(/ෂෝ/g, "fIda");
sftextDL = sftextDL.replace(/ඹෝ/g, "fUda");
sftextDL = sftextDL.replace(/ඡෝ/g, "fPda");
sftextDL = sftextDL.replace(/ඪෝ/g, "fVda");
sftextDL = sftextDL.replace(/ඝෝ/g, "f>da");
sftextDL = sftextDL.replace(/ඛෝ/g, "fLda");
sftextDL = sftextDL.replace(/ළෝ/g, "f<da");
sftextDL = sftextDL.replace(/ඟෝ/g, "fÛda");
sftextDL = sftextDL.replace(/ණෝ/g, "fKda");
sftextDL = sftextDL.replace(/ඵෝ/g, "fMda");
sftextDL = sftextDL.replace(/ඨෝ/g, "fGda");
sftextDL = sftextDL.replace(/ඬෝ/g, "fËda");
sftextDL = sftextDL.replace(/ශෝ/g, "fYda");
sftextDL = sftextDL.replace(/ඥෝ/g, "f{da");
sftextDL = sftextDL.replace(/ඳෝ/g, "f|da");
sftextDL = sftextDL.replace(/ක්‍ෂෝ/g, "fÌda");
sftextDL = sftextDL.replace(/බෝ/g, "fnda");
sftextDL = sftextDL.replace(/චෝ/g, "fpda");
sftextDL = sftextDL.replace(/ඩෝ/g, "fvda");
sftextDL = sftextDL.replace(/ෆෝ/g, "f*da");
sftextDL = sftextDL.replace(/ගෝ/g, "f.da");
sftextDL = sftextDL.replace(/හෝ/g, "fyda");
sftextDL = sftextDL.replace(/ජෝ/g, "fcda");
sftextDL = sftextDL.replace(/කෝ/g, "flda");
sftextDL = sftextDL.replace(/ලෝ/g, "f,da");
sftextDL = sftextDL.replace(/මෝ/g, "fuda");
sftextDL = sftextDL.replace(/නෝ/g, "fkda");
sftextDL = sftextDL.replace(/පෝ/g, "fmda");
sftextDL = sftextDL.replace(/දෝ/g, "foda");
sftextDL = sftextDL.replace(/රෝ/g, "frda");
sftextDL = sftextDL.replace(/සෝ/g, "fida");
sftextDL = sftextDL.replace(/ටෝ/g, "fgda");
sftextDL = sftextDL.replace(/වෝ/g, "fjda");
sftextDL = sftextDL.replace(/තෝ/g, "f;da");
sftextDL = sftextDL.replace(/භෝ/g, "fNda");
sftextDL = sftextDL.replace(/භූ/g, "N+");
sftextDL = sftextDL.replace(/භු/g, "N=");
sftextDL = sftextDL.replace(/යෝ/g, "fhda");
sftextDL = sftextDL.replace(/ඤෝ/g, "f[da");
sftextDL = sftextDL.replace(/ධෝ/g, "fOda");
sftextDL = sftextDL.replace(/ථෝ/g, "f:da");
sftextDL = sftextDL.replace(/ෂො/g, "fId");
sftextDL = sftextDL.replace(/ඹො/g, "fUd");
sftextDL = sftextDL.replace(/ඡො/g, "fPd");
sftextDL = sftextDL.replace(/ඪො/g, "fVd");
sftextDL = sftextDL.replace(/ඝො/g, "f>d");
sftextDL = sftextDL.replace(/ඛො/g, "fLd");
sftextDL = sftextDL.replace(/ළො/g, "f<d");
sftextDL = sftextDL.replace(/ඟො/g, "fÕd");
sftextDL = sftextDL.replace(/ණො/g, "fKd");
sftextDL = sftextDL.replace(/ඵො/g, "fMd");
sftextDL = sftextDL.replace(/ඨො/g, "fGd");
sftextDL = sftextDL.replace(/ඬො/g, "fËd");
sftextDL = sftextDL.replace(/ශො/g, "fYd");
sftextDL = sftextDL.replace(/ඥො/g, "f{d");
sftextDL = sftextDL.replace(/ඳො/g, "f|d");
sftextDL = sftextDL.replace(/ක්‍ෂො/g, "fÌd");
sftextDL = sftextDL.replace(/බො/g, "fnd");
sftextDL = sftextDL.replace(/චො/g, "fpd");
sftextDL = sftextDL.replace(/ඩො/g, "fvd");
sftextDL = sftextDL.replace(/ෆො/g, "f*d");
sftextDL = sftextDL.replace(/ගො/g, "f.d");
sftextDL = sftextDL.replace(/හො/g, "fyd");
sftextDL = sftextDL.replace(/ජො/g, "fcd");
sftextDL = sftextDL.replace(/කො/g, "fld");
sftextDL = sftextDL.replace(/ලො/g, "f,d");
sftextDL = sftextDL.replace(/මො/g, "fud");
sftextDL = sftextDL.replace(/නො/g, "fkd");
sftextDL = sftextDL.replace(/පො/g, "fmd");
sftextDL = sftextDL.replace(/දො/g, "fod");
sftextDL = sftextDL.replace(/රො/g, "frd");
sftextDL = sftextDL.replace(/සො/g, "fid");
sftextDL = sftextDL.replace(/ටො/g, "fgd");
sftextDL = sftextDL.replace(/වො/g, "fjd");
sftextDL = sftextDL.replace(/තො/g, "f;d");
sftextDL = sftextDL.replace(/භො/g, "fNd");
sftextDL = sftextDL.replace(/යො/g, "fhd");
sftextDL = sftextDL.replace(/ඤො/g, "f[d");
sftextDL = sftextDL.replace(/ධො/g, "fOd");
sftextDL = sftextDL.replace(/ථො/g, "f:d");
sftextDL = sftextDL.replace(/ෂේ/g, "fIa");
sftextDL = sftextDL.replace(/ඹේ/g, "fò");
sftextDL = sftextDL.replace(/ඡේ/g, "fþ");
sftextDL = sftextDL.replace(/ඪේ/g, "f\a");
sftextDL = sftextDL.replace(/ඝේ/g, "f>a");
sftextDL = sftextDL.replace(/ඛේ/g, "fÄ");
sftextDL = sftextDL.replace(/ළේ/g, "f<a");
sftextDL = sftextDL.replace(/ඟේ/g, "fÛa");
sftextDL = sftextDL.replace(/ණේ/g, "fKa");
sftextDL = sftextDL.replace(/ඵේ/g, "fMa");
sftextDL = sftextDL.replace(/ඨේ/g, "fGa");
sftextDL = sftextDL.replace(/ඬේ/g, "få");
sftextDL = sftextDL.replace(/ශේ/g, "fYa");
sftextDL = sftextDL.replace(/ඥේ/g, "f{a");
sftextDL = sftextDL.replace(/ඳේ/g, "f|a");
sftextDL = sftextDL.replace(/ක්‍ෂේ/g, "fÌa");
sftextDL = sftextDL.replace(/බේ/g, "fí");
sftextDL = sftextDL.replace(/චේ/g, "fÉ");
sftextDL = sftextDL.replace(/ඩේ/g, "fâ");
sftextDL = sftextDL.replace(/ෆේ/g, "f*");
sftextDL = sftextDL.replace(/ගේ/g, "f.a");
sftextDL = sftextDL.replace(/හේ/g, "fya");
sftextDL = sftextDL.replace(/පේ/g, "fma");
sftextDL = sftextDL.replace(/කේ/g, "fla");
sftextDL = sftextDL.replace(/ලේ/g, "f,a");
sftextDL = sftextDL.replace(/මේ/g, "fï");
sftextDL = sftextDL.replace(/නේ/g, "fka");
sftextDL = sftextDL.replace(/ජේ/g, "f–");
sftextDL = sftextDL.replace(/දේ/g, "foa");
sftextDL = sftextDL.replace(/රේ/g, "f¾");
sftextDL = sftextDL.replace(/සේ/g, "fia");
sftextDL = sftextDL.replace(/ටේ/g, "fÜ");
sftextDL = sftextDL.replace(/වේ/g, "fõ");
sftextDL = sftextDL.replace(/තේ/g, "f;a");
sftextDL = sftextDL.replace(/භේ/g, "fNa");
sftextDL = sftextDL.replace(/යේ/g, "fha");
sftextDL = sftextDL.replace(/ඤේ/g, "f[a");
sftextDL = sftextDL.replace(/ධේ/g, "fè");
sftextDL = sftextDL.replace(/ථේ/g, "f:a");
sftextDL = sftextDL.replace(/ෂෙ/g, "fI");
sftextDL = sftextDL.replace(/ඹෙ/g, "fU");
sftextDL = sftextDL.replace(/ඓ/g, "ft");
sftextDL = sftextDL.replace(/ඡෙ/g, "fP");
sftextDL = sftextDL.replace(/ඪෙ/g, "fV");
sftextDL = sftextDL.replace(/ඝෙ/g, "f>");
sftextDL = sftextDL.replace(/ඛෙ/g, "fn");
sftextDL = sftextDL.replace(/ළෙ/g, "f<");
sftextDL = sftextDL.replace(/ඟෙ/g, "fÛ");
sftextDL = sftextDL.replace(/ණෙ/g, "fK");
sftextDL = sftextDL.replace(/ඵෙ/g, "fM");
sftextDL = sftextDL.replace(/ඨෙ/g, "fG");
sftextDL = sftextDL.replace(/ඬෙ/g, "fË");
sftextDL = sftextDL.replace(/ශෙ/g, "fY");
sftextDL = sftextDL.replace(/ඥෙ/g, "f{");
sftextDL = sftextDL.replace(/ඳෙ/g, "fË");
sftextDL = sftextDL.replace(/ක්‍ෂෙ/g, "fÌ");
sftextDL = sftextDL.replace(/බෙ/g, "fn");
sftextDL = sftextDL.replace(/චෙ/g, "fp");
sftextDL = sftextDL.replace(/ඩෙ/g, "fv");
sftextDL = sftextDL.replace(/ෆෙ/g, "f*");
sftextDL = sftextDL.replace(/ගෙ/g, "f.");
sftextDL = sftextDL.replace(/හෙ/g, "fy");
sftextDL = sftextDL.replace(/ජෙ/g, "fc");
sftextDL = sftextDL.replace(/කෙ/g, "fl");
sftextDL = sftextDL.replace(/ලෙ/g, "f,");
sftextDL = sftextDL.replace(/මෙ/g, "fu");
sftextDL = sftextDL.replace(/නෙ/g, "fk");
sftextDL = sftextDL.replace(/පෙ/g, "fm");
sftextDL = sftextDL.replace(/දෙ/g, "fo");
sftextDL = sftextDL.replace(/රෙ/g, "fr");
sftextDL = sftextDL.replace(/සෙ/g, "fi");
sftextDL = sftextDL.replace(/ටෙ/g, "fg");
sftextDL = sftextDL.replace(/වෙ/g, "fj");
sftextDL = sftextDL.replace(/තෙ/g, "f;");
sftextDL = sftextDL.replace(/භෙ/g, "fN");
sftextDL = sftextDL.replace(/යෙ/g, "fh");
sftextDL = sftextDL.replace(/ඤෙ/g, "f[");
sftextDL = sftextDL.replace(/ධෙ/g, "fO");
sftextDL = sftextDL.replace(/ථෙ/g, "f:");
sftextDL = sftextDL.replace(/තු/g, ";=");
sftextDL = sftextDL.replace(/ගු/g, ".=");
sftextDL = sftextDL.replace(/කු/g, "l=");
sftextDL = sftextDL.replace(/තූ/g, ";+");
sftextDL = sftextDL.replace(/ගූ/g, ".+");
sftextDL = sftextDL.replace(/කූ/g, "l+");
sftextDL = sftextDL.replace(/රු/g, "re");
sftextDL = sftextDL.replace(/රූ/g, "rE");
sftextDL = sftextDL.replace(/ආ/g, "wd");
sftextDL = sftextDL.replace(/ඇ/g, "we");
sftextDL = sftextDL.replace(/ඈ/g, "wE");
sftextDL = sftextDL.replace(/ඌ/g, "W!");
sftextDL = sftextDL.replace(/ඖ/g, "T!");
sftextDL = sftextDL.replace(/ඒ/g, "ta");
sftextDL = sftextDL.replace(/ඕ/g, "´");
sftextDL = sftextDL.replace(/ඳි/g, "¢");
sftextDL = sftextDL.replace(/ඳී/g, "£");
sftextDL = sftextDL.replace(/දූ/g, "¥");
sftextDL = sftextDL.replace(/දී/g, "§");
sftextDL = sftextDL.replace(/ලූ/g, "¨");
sftextDL = sftextDL.replace(/ර්‍ය/g, "©");
sftextDL = sftextDL.replace(/ඳූ/g, "ª");
sftextDL = sftextDL.replace(/ර්/g, "¾");
sftextDL = sftextDL.replace(/ඨි/g, "À");
sftextDL = sftextDL.replace(/ඨී/g, "Á");
sftextDL = sftextDL.replace(/ඡී/g, "Â");
sftextDL = sftextDL.replace(/ඛ්/g, "Ä");
sftextDL = sftextDL.replace(/ඛි/g, "Å");
sftextDL = sftextDL.replace(/ලු/g, "Æ");
sftextDL = sftextDL.replace(/ඛී/g, "Ç");
sftextDL = sftextDL.replace(/දි/g, "È");
sftextDL = sftextDL.replace(/ච්/g, "É");
sftextDL = sftextDL.replace(/ජ්/g, "Ê");
sftextDL = sftextDL.replace(/රී/g, "Í");
sftextDL = sftextDL.replace(/ඪී/g, "Î");
sftextDL = sftextDL.replace(/ඪී/g, "Ð,");
sftextDL = sftextDL.replace(/චි/g, "Ñ");
sftextDL = sftextDL.replace(/ථී/g, "Ò");
sftextDL = sftextDL.replace(/ථී/g, "Ó");
sftextDL = sftextDL.replace(/ජී/g, "Ô");
sftextDL = sftextDL.replace(/චී/g, "Ö");
sftextDL = sftextDL.replace(/ඞ්/g, "Ù");
sftextDL = sftextDL.replace(/ඵී/g, "Ú");
sftextDL = sftextDL.replace(/ට්/g, "Ü");
sftextDL = sftextDL.replace(/ඵි/g, "Ý");
sftextDL = sftextDL.replace(/රි/g, "ß");
sftextDL = sftextDL.replace(/ටී/g, "à");
sftextDL = sftextDL.replace(/ටි/g, "á");
sftextDL = sftextDL.replace(/ඩ්/g, "â");
sftextDL = sftextDL.replace(/ඩී/g, "ã");
sftextDL = sftextDL.replace(/ඩි/g, "ä");
sftextDL = sftextDL.replace(/ඬ්/g, "å");
sftextDL = sftextDL.replace(/ඬි/g, "ç");
sftextDL = sftextDL.replace(/ධ්/g, "è");
sftextDL = sftextDL.replace(/ඬී/g, "é");
sftextDL = sftextDL.replace(/ධි/g, "ê");
sftextDL = sftextDL.replace(/ධී/g, "ë");
sftextDL = sftextDL.replace(/බි/g, "ì");
sftextDL = sftextDL.replace(/බ්/g, "í");
sftextDL = sftextDL.replace(/බී/g, "î");
sftextDL = sftextDL.replace(/ම්/g, "ï");
sftextDL = sftextDL.replace(/ජි/g, "ð");
sftextDL = sftextDL.replace(/මි/g, "ñ");
sftextDL = sftextDL.replace(/ඹ්/g, "ò");
sftextDL = sftextDL.replace(/මී/g, "ó");
sftextDL = sftextDL.replace(/ඹි/g, "ô");
sftextDL = sftextDL.replace(/ව්/g, "õ");
sftextDL = sftextDL.replace(/ඹී/g, "ö");
sftextDL = sftextDL.replace(/ඳු/g, "÷");
sftextDL = sftextDL.replace(/ද්‍ර/g, "ø");
sftextDL = sftextDL.replace(/වී/g, "ù");
sftextDL = sftextDL.replace(/වි/g, "ú");
sftextDL = sftextDL.replace(/ඞ්/g, "û");
sftextDL = sftextDL.replace(/ඞී/g, "ü");
sftextDL = sftextDL.replace(/ඡි/g, "ý");
sftextDL = sftextDL.replace(/ඡ්/g, "þ");
sftextDL = sftextDL.replace(/දු/g, "ÿ");
sftextDL = sftextDL.replace(/ජ්/g, "–");
sftextDL = sftextDL.replace(/ර්‍ණ/g, "“");
sftextDL = sftextDL.replace(/ණී/g, "”");
sftextDL = sftextDL.replace(/ජී/g, "„");
sftextDL = sftextDL.replace(/ඡි/g, "‰");
sftextDL = sftextDL.replace(/ඩි/g, "");
sftextDL = sftextDL.replace(/ඤු/g, "™");
sftextDL = sftextDL.replace(/ග/g, ".");
sftextDL = sftextDL.replace(/ළු/g, "¿");
sftextDL = sftextDL.replace(/ෂ/g, "I");
sftextDL = sftextDL.replace(/ං/g, "x");
sftextDL = sftextDL.replace(/ඃ/g, "#");
sftextDL = sftextDL.replace(/ඹ/g, "U");
sftextDL = sftextDL.replace(/ඡ/g, "P");
sftextDL = sftextDL.replace(/ඪ/g, "V");
sftextDL = sftextDL.replace(/ඝ/g, ">");
sftextDL = sftextDL.replace(/ඊ/g, "B");
sftextDL = sftextDL.replace(/ඣ/g, "CO");
sftextDL = sftextDL.replace(/ඛ/g, "L");
sftextDL = sftextDL.replace(/ළ/g, "<");
sftextDL = sftextDL.replace(/ඟ/g, "Û");
sftextDL = sftextDL.replace(/ණ/g, "K");
sftextDL = sftextDL.replace(/ඵ/g, "M");
sftextDL = sftextDL.replace(/ඨ/g, "G");
sftextDL = sftextDL.replace(/ඃ/g, "#");
sftextDL = sftextDL.replace(/\"/g, ",");
sftextDL = sftextDL.replace(/\//g, "$");
sftextDL = sftextDL.replace(/\)/g, "&");
sftextDL = sftextDL.replace(/:/g, "(");
sftextDL = sftextDL.replace(/-/g, ")");
sftextDL = sftextDL.replace(/ෆ/g, "*");
sftextDL = sftextDL.replace(/ල/g, ",");
sftextDL = sftextDL.replace(/-/g, "-");
sftextDL = sftextDL.replace(/රැ/g, "/");
sftextDL = sftextDL.replace(/ථ/g, ":");
sftextDL = sftextDL.replace(/ත/g, ";");
sftextDL = sftextDL.replace(/ළ/g, "<");
sftextDL = sftextDL.replace(/ඝ/g, ">");
sftextDL = sftextDL.replace(/රෑ/g, "?");
sftextDL = sftextDL.replace(/ඊ/g, "B");
sftextDL = sftextDL.replace(/ක‍/g, "C");
sftextDL = sftextDL.replace(/‍ෘ/g, "D");
sftextDL = sftextDL.replace(/ෑ/g, "E");
sftextDL = sftextDL.replace(/ත‍/g, "F");
sftextDL = sftextDL.replace(/ඨ/g, "G");
sftextDL = sftextDL.replace(/්‍ය/g, "H");
sftextDL = sftextDL.replace(/ෂ/g, "I");
sftextDL = sftextDL.replace(/න‍/g, "J");
sftextDL = sftextDL.replace(/ණ/g, "K");
sftextDL = sftextDL.replace(/ඛ/g, "L");
sftextDL = sftextDL.replace(/ඵ/g, "M");
sftextDL = sftextDL.replace(/භ/g, "N");
sftextDL = sftextDL.replace(/ධ/g, "O");
sftextDL = sftextDL.replace(/ඡ/g, "P");
sftextDL = sftextDL.replace(/ඍ/g, "R");
sftextDL = sftextDL.replace(/ඔ/g, "T");
sftextDL = sftextDL.replace(/ඹ/g, "U");
sftextDL = sftextDL.replace(/ඪ/g, "V");
sftextDL = sftextDL.replace(/උ/g, "W");
sftextDL = sftextDL.replace(/ශ/g, "Y");
sftextDL = sftextDL.replace(/ඤ/g, "[");
sftextDL = sftextDL.replace(/ඉ/g, "b");
sftextDL = sftextDL.replace(/ජ/g, "c");
sftextDL = sftextDL.replace(/ට/g, "g");
sftextDL = sftextDL.replace(/ය/g, "h");
sftextDL = sftextDL.replace(/ස/g, "i");
sftextDL = sftextDL.replace(/ව/g, "j");
sftextDL = sftextDL.replace(/න/g, "k");
sftextDL = sftextDL.replace(/ක/g, "l");
sftextDL = sftextDL.replace(/ප/g, "m");
sftextDL = sftextDL.replace(/බ/g, "n");
sftextDL = sftextDL.replace(/ද/g, "o");
sftextDL = sftextDL.replace(/ච/g, "p");
sftextDL = sftextDL.replace(/ර/g, "r");
sftextDL = sftextDL.replace(/එ/g, "t");
sftextDL = sftextDL.replace(/ම/g, "u");
sftextDL = sftextDL.replace(/ඩ/g, "v");
sftextDL = sftextDL.replace(/අ/g, "w");
sftextDL = sftextDL.replace(/හ/g, "y");
sftextDL = sftextDL.replace(/ඥ/g, "{");
sftextDL = sftextDL.replace(/ඳ/g, "|");
sftextDL = sftextDL.replace(/ක්‍ෂ/g, "Ì");
sftextDL = sftextDL.replace(/ැ/g, "e");
sftextDL = sftextDL.replace(/ෑ/g, "E");
sftextDL = sftextDL.replace(/ෙ/g, "f");
sftextDL = sftextDL.replace(/ු/g, "q");
sftextDL = sftextDL.replace(/ි/g, "s");
sftextDL = sftextDL.replace(/ූ/g, "Q");
sftextDL = sftextDL.replace(/ී/g, "S");
sftextDL = sftextDL.replace(/ෘ/g, "D");
sftextDL = sftextDL.replace(/ෲ/g, "DD");
sftextDL = sftextDL.replace(/ෟ/g, "!");
sftextDL = sftextDL.replace(/ා/g, "d");
sftextDL = sftextDL.replace(/්/g, "a");
sftextDL = sftextDL.replace(/￦/g, "\"");
sftextDL = sftextDL.replace(/￫/g, "^");
sftextDL = sftextDL.replace(/￩/g, "&");
sftextDL = sftextDL.replace(/ￔ/g, ")");
sftextDL = sftextDL.replace(/ￓ/g, "@");
sftextDL = sftextDL.replace(/ￒ/g, "`");
sftextDL = sftextDL.replace(/ￏ/g, "}");
sftextDL = sftextDL.replace(/ￎ/g, "'");
sftextDL = sftextDL.replace(/\ￍ/g, "¤");
sftextDL = sftextDL.replace(/\ￌ/g, "•");
sftextDL = sftextDL.replace(/\ￊ/g, "›");
sftextDL = sftextDL.replace(/\ﾶ/g, "∙");
sftextDL = sftextDL.replace(/ￕ/g, "]");
		
		document.txtBox.box3DL.value=sftextDL;
	}
	
