﻿// JavaScript Document

var sftextMI;
	
function startTextSfMI() {
sftextMI = document.txtBox.box2.value;  
	
sftextMI = sftextMI.replace(/,/g, "￦");
sftextMI = sftextMI.replace(/\./g, "‘");   //මේකත් භාවිතා කරන්න පුලුවන් ’
sftextMI = sftextMI.replace(/\(/g, "￫");
sftextMI = sftextMI.replace(/\)/g, "￩");
sftextMI = sftextMI.replace(/%/g, "ￕ");
sftextMI = sftextMI.replace(/\//g, "$");
sftextMI = sftextMI.replace(/–/g, "ￔ");
sftextMI = sftextMI.replace(/\?/g, "@");
sftextMI = sftextMI.replace(/!/g, "ￒ");
sftextMI = sftextMI.replace(/\=/g, "ￏ");
sftextMI = sftextMI.replace(/\'/g, "ￎ");
sftextMI = sftextMI.replace(/\+/g, "ￍ");
sftextMI = sftextMI.replace(/\:/g, "ￌ");
sftextMI = sftextMI.replace(/\÷/g, "ￋ");
sftextMI = sftextMI.replace(/\;/g, "ﾶ");
sftextMI = sftextMI.replace(/ත්‍රෛ/g, "ff;%");
sftextMI = sftextMI.replace(/ශෛ/g, "ffY");
sftextMI = sftextMI.replace(/චෛ/g, "ffp");
sftextMI = sftextMI.replace(/ජෛ/g, "ffc");
sftextMI = sftextMI.replace(/කෛ/g, "ffl");
sftextMI = sftextMI.replace(/මෛ/g, "ffu");
sftextMI = sftextMI.replace(/පෛ/g, "ffm");
sftextMI = sftextMI.replace(/දෛ/g, "ffo");
sftextMI = sftextMI.replace(/තෛ/g, "ff;");
sftextMI = sftextMI.replace(/නෛ/g, "ffk");
sftextMI = sftextMI.replace(/ධෛ/g, "ffO");
sftextMI = sftextMI.replace(/වෛ/g, "ffj");
sftextMI = sftextMI.replace(/ප්‍රෞ/g, "fm%!");
sftextMI = sftextMI.replace(/ෂ්‍යෝ/g, "fIHda");
sftextMI = sftextMI.replace(/ඡ්‍යෝ/g, "fPHda");
sftextMI = sftextMI.replace(/ඪ්‍යෝ/g, "fVHda");
sftextMI = sftextMI.replace(/ඝ්‍යෝ/g, "f>Hda");
sftextMI = sftextMI.replace(/ඛ්‍යෝ/g, "fLHda");
sftextMI = sftextMI.replace(/ළ්‍යෝ/g, "f<Hda");
sftextMI = sftextMI.replace(/ඵ්‍යෝ/g, "fMHda");
sftextMI = sftextMI.replace(/ඨ්‍යෝ/g, "fGHda");
sftextMI = sftextMI.replace(/ශ්‍යෝ/g, "fYHda");
sftextMI = sftextMI.replace(/ක්‍ෂ්‍යෝ/g, "fÌHda");
sftextMI = sftextMI.replace(/බ්‍යෝ/g, "fnHda");
sftextMI = sftextMI.replace(/ච්‍යෝ/g, "fpHda");
sftextMI = sftextMI.replace(/ඩ්‍යෝ/g, "fâHda");
sftextMI = sftextMI.replace(/ෆ්‍යෝ/g, "f*Hda");
sftextMI = sftextMI.replace(/ග්‍යෝ/g, "f.Hda");
sftextMI = sftextMI.replace(/ජ්‍යෝ/g, "fcHda");
sftextMI = sftextMI.replace(/ක්‍යෝ/g, "flHda");
sftextMI = sftextMI.replace(/ල්‍යෝ/g, "f,Hda");
sftextMI = sftextMI.replace(/ම්‍යෝ/g, "fuHda");
sftextMI = sftextMI.replace(/න්‍යෝ/g, "fkHda");
sftextMI = sftextMI.replace(/ප්‍යෝ/g, "fmHda");
sftextMI = sftextMI.replace(/ද්‍යෝ/g, "foHda");
sftextMI = sftextMI.replace(/ස්‍යෝ/g, "fiHda");
sftextMI = sftextMI.replace(/ට්‍යෝ/g, "fgHda");
sftextMI = sftextMI.replace(/ව්‍යෝ/g, "fjHda");
sftextMI = sftextMI.replace(/ත්‍යෝ/g, "f;Hda");
sftextMI = sftextMI.replace(/භ්‍යෝ/g, "fNHda");
sftextMI = sftextMI.replace(/ධ්‍යෝ/g, "fOHda");
sftextMI = sftextMI.replace(/ථ්‍යෝ/g, "f:Hda");
sftextMI = sftextMI.replace(/ෂ්‍යො/g, "fIHd");
sftextMI = sftextMI.replace(/ශ්‍යො/g, "fYHd");
sftextMI = sftextMI.replace(/ඛ්‍යො/g, "fLHd");
sftextMI = sftextMI.replace(/ක්‍ෂ්‍යො/g, "fÌHd");
sftextMI = sftextMI.replace(/බ්‍යො/g, "fnHd");
sftextMI = sftextMI.replace(/ව්‍යො/g, "fjHd");
sftextMI = sftextMI.replace(/ඩ්‍යො/g, "fvHd");
sftextMI = sftextMI.replace(/ෆ්‍යො/g, "f*Hd");
sftextMI = sftextMI.replace(/ග්‍යො/g, "f.Hd");
sftextMI = sftextMI.replace(/ජ්‍යො/g, "fcHd");
sftextMI = sftextMI.replace(/ක්‍යො/g, "flHd");
sftextMI = sftextMI.replace(/ම්‍යො/g, "fuHd");
sftextMI = sftextMI.replace(/ප්‍යො/g, "fmHd");
sftextMI = sftextMI.replace(/ද්‍යො/g, "foHd");
sftextMI = sftextMI.replace(/ස්‍යො/g, "fiHd");
sftextMI = sftextMI.replace(/ට්‍යො/g, "fgHd");
sftextMI = sftextMI.replace(/ව්‍යො/g, "fjHd");
sftextMI = sftextMI.replace(/ත්‍යො/g, "f;Hd");
sftextMI = sftextMI.replace(/භ්‍යො/g, "fNHd");
sftextMI = sftextMI.replace(/ධ්‍යො/g, "fOHd");
sftextMI = sftextMI.replace(/ථ්‍යො/g, "f:Hd");
sftextMI = sftextMI.replace(/ෂ්‍යෙ/g, "fIH");
sftextMI = sftextMI.replace(/ඡ්‍යෙ/g, "fPH");
sftextMI = sftextMI.replace(/ළ්‍යෙ/g, "f<H");
sftextMI = sftextMI.replace(/ණ්‍යෙ/g, "fKH");
sftextMI = sftextMI.replace(/ච්‍යෙ/g, "fpH");
sftextMI = sftextMI.replace(/ල්‍යෙ/g, "f,H");
sftextMI = sftextMI.replace(/න්‍යෙ/g, "fkH");
sftextMI = sftextMI.replace(/ශ්‍යෙ/g, "fYH");
sftextMI = sftextMI.replace(/ඛ්‍යෙ/g, "fLH");
sftextMI = sftextMI.replace(/ක්‍ෂ්යෙ/g, "laIfh");
sftextMI = sftextMI.replace(/බ්‍යෙ/g, "fnH");
sftextMI = sftextMI.replace(/ඩ්‍යෙ/g, "fvH");
sftextMI = sftextMI.replace(/ෆ්‍යෙ/g, "f*H");
sftextMI = sftextMI.replace(/ග්‍යෙ/g, "f.H");
sftextMI = sftextMI.replace(/ජ්‍යෙ/g, "fcH");
sftextMI = sftextMI.replace(/ක්‍යෙ/g, "flH");
sftextMI = sftextMI.replace(/ම්‍යෙ/g, "fuH");
sftextMI = sftextMI.replace(/ප්‍යෙ/g, "fmH");
sftextMI = sftextMI.replace(/ද්‍යෙ/g, "foH");
sftextMI = sftextMI.replace(/ස්‍යෙ/g, "fiH");
sftextMI = sftextMI.replace(/ට්‍යෙ/g, "fgH");
sftextMI = sftextMI.replace(/ව්‍යෙ/g, "fjH");
sftextMI = sftextMI.replace(/ත්‍යෙ/g, "f;H");
sftextMI = sftextMI.replace(/භ්‍යෙ/g, "fNH");
sftextMI = sftextMI.replace(/ධ්‍යෙ/g, "fOH");
sftextMI = sftextMI.replace(/ථ්‍යෙ/g, "f:H");
sftextMI = sftextMI.replace(/ෂ්‍රෝ/g, "fI%da");
sftextMI = sftextMI.replace(/ඝ්‍රෝ/g, "f>%da");
sftextMI = sftextMI.replace(/ශ්‍රෝ/g, "fY%da");
sftextMI = sftextMI.replace(/ක්‍ෂ්‍රෝ/g, "fÌ%da");
sftextMI = sftextMI.replace(/බ්‍රෝ/g, "fn%da");
sftextMI = sftextMI.replace(/ඩ්‍රෝ/g, "fv%da");
sftextMI = sftextMI.replace(/ෆ්‍රෝ/g, "f*%da");
sftextMI = sftextMI.replace(/ග්‍රෝ/g, "f.%da");
sftextMI = sftextMI.replace(/ක්‍රෝ/g, "fl%da");
sftextMI = sftextMI.replace(/ප්‍රෝ/g, "fm%da");
sftextMI = sftextMI.replace(/ද්‍රෝ/g, "føda");
sftextMI = sftextMI.replace(/ස්‍රෝ/g, "fi%da");
sftextMI = sftextMI.replace(/ට්‍රෝ/g, "fg%da");
sftextMI = sftextMI.replace(/ත්‍රෝ/g, "f;%da");
sftextMI = sftextMI.replace(/ශ්‍රො/g, "fY%d");
sftextMI = sftextMI.replace(/ඩ්‍රො/g, "fv%d");
sftextMI = sftextMI.replace(/ෆ්‍රො/g, "f*%d");
sftextMI = sftextMI.replace(/ග්‍රො/g, "f.%d");
sftextMI = sftextMI.replace(/ක්‍රො/g, "fl%d");
sftextMI = sftextMI.replace(/ප්‍රො/g, "fm%d");
sftextMI = sftextMI.replace(/ද්‍රො/g, "fød");
sftextMI = sftextMI.replace(/ස්‍රො/g, "fi%d");
sftextMI = sftextMI.replace(/ට්‍රො/g, "fg%d");
sftextMI = sftextMI.replace(/ත්‍රො/g, "f;%d");
sftextMI = sftextMI.replace(/ශ්‍රේ/g, "fYa%");
sftextMI = sftextMI.replace(/බ්‍රේ/g, "fæ%");
sftextMI = sftextMI.replace(/ඩ්‍රේ/g, "fö%");
sftextMI = sftextMI.replace(/ෆ්‍රේ/g, "f*a%");
sftextMI = sftextMI.replace(/ග්‍රේ/g, "f.a%");
sftextMI = sftextMI.replace(/ක්‍රේ/g, "fla%");
sftextMI = sftextMI.replace(/ප්‍රේ/g, "fma%");
sftextMI = sftextMI.replace(/ද්‍රේ/g, "føa");
sftextMI = sftextMI.replace(/ස්‍රේ/g, "fia%");
sftextMI = sftextMI.replace(/ත්‍රේ/g, "f;a%");
sftextMI = sftextMI.replace(/ධ්‍රේ/g, "fù%");
sftextMI = sftextMI.replace(/ෂ්‍රෙ/g, "fI%");
sftextMI = sftextMI.replace(/ශ්‍රෙ/g, "fY%");
sftextMI = sftextMI.replace(/බ්‍රෙ/g, "fn%");
sftextMI = sftextMI.replace(/ෆ්‍රෙ/g, "f*%");
sftextMI = sftextMI.replace(/ග්‍රෙ/g, "f.%");
sftextMI = sftextMI.replace(/ක්‍රෙ/g, "fl%");
sftextMI = sftextMI.replace(/ප්‍රෙ/g, "fm%");
sftextMI = sftextMI.replace(/ද්‍රෙ/g, "fø");
sftextMI = sftextMI.replace(/ස්‍රෙ/g, "fi%");
sftextMI = sftextMI.replace(/ත්‍රෙ/g, "f;%");
sftextMI = sftextMI.replace(/භ්‍රෙ/g, "fN%");
sftextMI = sftextMI.replace(/ධ්‍රෙ/g, "fO%");
sftextMI = sftextMI.replace(/්‍ය/g, "H");
sftextMI = sftextMI.replace(/්‍ර/g, "%");
sftextMI = sftextMI.replace(/ෂෞ/g, "fI!");
sftextMI = sftextMI.replace(/ඡෞ/g, "fP!");
sftextMI = sftextMI.replace(/ශෞ/g, "fY!");
sftextMI = sftextMI.replace(/බෞ/g, "fn!");
sftextMI = sftextMI.replace(/චෞ/g, "fp!");
sftextMI = sftextMI.replace(/ඩෞ/g, "fv!");
sftextMI = sftextMI.replace(/ෆෞ/g, "f*!");
sftextMI = sftextMI.replace(/ගෞ/g, "f.!");
sftextMI = sftextMI.replace(/ජෞ/g, "fc!");
sftextMI = sftextMI.replace(/කෞ/g, "fl!");
sftextMI = sftextMI.replace(/ලෞ/g, "f,!");
sftextMI = sftextMI.replace(/මෞ/g, "fu!");
sftextMI = sftextMI.replace(/නෞ/g, "fk!");
sftextMI = sftextMI.replace(/පෞ/g, "fm!");
sftextMI = sftextMI.replace(/දෞ/g, "fo!");
sftextMI = sftextMI.replace(/රෞ/g, "fr!");
sftextMI = sftextMI.replace(/සෞ/g, "fi!");
sftextMI = sftextMI.replace(/ටෞ/g, "fg!");
sftextMI = sftextMI.replace(/තෞ/g, "f;!");
sftextMI = sftextMI.replace(/භෞ/g, "fN!");
sftextMI = sftextMI.replace(/ඤෞ/g, "f[!");
sftextMI = sftextMI.replace(/ෂෝ/g, "fIda");
sftextMI = sftextMI.replace(/ඹෝ/g, "fUda");
sftextMI = sftextMI.replace(/ඡෝ/g, "fPda");
sftextMI = sftextMI.replace(/ඪෝ/g, "fVda");
sftextMI = sftextMI.replace(/ඝෝ/g, "f>da");
sftextMI = sftextMI.replace(/ඛෝ/g, "fLda");
sftextMI = sftextMI.replace(/ළෝ/g, "f<da");
sftextMI = sftextMI.replace(/ඟෝ/g, "fšda");     // 111
sftextMI = sftextMI.replace(/ණෝ/g, "fKda");
sftextMI = sftextMI.replace(/ඵෝ/g, "fMda");
sftextMI = sftextMI.replace(/ඨෝ/g, "fGda");
sftextMI = sftextMI.replace(/ඬෝ/g, "f~da");
sftextMI = sftextMI.replace(/ශෝ/g, "fYda");
sftextMI = sftextMI.replace(/ඥෝ/g, "f{da");
sftextMI = sftextMI.replace(/ඳෝ/g, "f|da");
sftextMI = sftextMI.replace(/ක්‍ෂෝ/g, "fÌda");
sftextMI = sftextMI.replace(/බෝ/g, "fnda");
sftextMI = sftextMI.replace(/චෝ/g, "fpda");
sftextMI = sftextMI.replace(/ඩෝ/g, "fvda");
sftextMI = sftextMI.replace(/ෆෝ/g, "f*da");
sftextMI = sftextMI.replace(/ගෝ/g, "f.da");
sftextMI = sftextMI.replace(/හෝ/g, "fyda");
sftextMI = sftextMI.replace(/ජෝ/g, "fcda");
sftextMI = sftextMI.replace(/කෝ/g, "flda");
sftextMI = sftextMI.replace(/ලෝ/g, "f,da");
sftextMI = sftextMI.replace(/මෝ/g, "fuda");
sftextMI = sftextMI.replace(/නෝ/g, "fkda");
sftextMI = sftextMI.replace(/පෝ/g, "fmda");
sftextMI = sftextMI.replace(/දෝ/g, "foda");
sftextMI = sftextMI.replace(/රෝ/g, "frda");
sftextMI = sftextMI.replace(/සෝ/g, "fida");
sftextMI = sftextMI.replace(/ටෝ/g, "fgda");
sftextMI = sftextMI.replace(/වෝ/g, "fjda");
sftextMI = sftextMI.replace(/තෝ/g, "f;da");
sftextMI = sftextMI.replace(/භෝ/g, "fNda");
sftextMI = sftextMI.replace(/භූ/g, "N+");
sftextMI = sftextMI.replace(/භු/g, "N=");
sftextMI = sftextMI.replace(/යෝ/g, "fhda");
sftextMI = sftextMI.replace(/ඤෝ/g, "f[da");
sftextMI = sftextMI.replace(/ධෝ/g, "fOda");
sftextMI = sftextMI.replace(/ථෝ/g, "f:da");
sftextMI = sftextMI.replace(/ෂො/g, "fId");
sftextMI = sftextMI.replace(/ඹො/g, "fUd");
sftextMI = sftextMI.replace(/ඡො/g, "fPd");
sftextMI = sftextMI.replace(/ඪො/g, "fVd");
sftextMI = sftextMI.replace(/ඝො/g, "f>d");
sftextMI = sftextMI.replace(/ඛො/g, "fLd");
sftextMI = sftextMI.replace(/ළො/g, "f<d");
sftextMI = sftextMI.replace(/ඟො/g, "fÕd");
sftextMI = sftextMI.replace(/ණො/g, "fKd");
sftextMI = sftextMI.replace(/ඵො/g, "fMd");
sftextMI = sftextMI.replace(/ඨො/g, "fGd");
sftextMI = sftextMI.replace(/ඬො/g, "f~d");
sftextMI = sftextMI.replace(/ශො/g, "fYd");
sftextMI = sftextMI.replace(/ඥො/g, "f{d");
sftextMI = sftextMI.replace(/ඳො/g, "f|d");
sftextMI = sftextMI.replace(/ක්‍ෂො/g, "fÌd");
sftextMI = sftextMI.replace(/බො/g, "fnd");
sftextMI = sftextMI.replace(/චො/g, "fpd");
sftextMI = sftextMI.replace(/ඩො/g, "fvd");
sftextMI = sftextMI.replace(/ෆො/g, "f*d");
sftextMI = sftextMI.replace(/ගො/g, "f.d");
sftextMI = sftextMI.replace(/හො/g, "fyd");
sftextMI = sftextMI.replace(/ජො/g, "fcd");
sftextMI = sftextMI.replace(/කො/g, "fld");
sftextMI = sftextMI.replace(/ලො/g, "f,d");
sftextMI = sftextMI.replace(/මො/g, "fud");
sftextMI = sftextMI.replace(/නො/g, "fkd");
sftextMI = sftextMI.replace(/පො/g, "fmd");
sftextMI = sftextMI.replace(/දො/g, "fod");
sftextMI = sftextMI.replace(/රො/g, "frd");
sftextMI = sftextMI.replace(/සො/g, "fid");
sftextMI = sftextMI.replace(/ටො/g, "fgd");
sftextMI = sftextMI.replace(/වො/g, "fjd");
sftextMI = sftextMI.replace(/තො/g, "f;d");
sftextMI = sftextMI.replace(/භො/g, "fNd");
sftextMI = sftextMI.replace(/යො/g, "fhd");
sftextMI = sftextMI.replace(/ඤො/g, "f[d");
sftextMI = sftextMI.replace(/ධො/g, "fOd");
sftextMI = sftextMI.replace(/ථො/g, "f:d");
sftextMI = sftextMI.replace(/ෂේ/g, "fIa");
sftextMI = sftextMI.replace(/ඹේ/g, "fò");
sftextMI = sftextMI.replace(/ඡේ/g, "fþ");
sftextMI = sftextMI.replace(/ඪේ/g, "f\a");
sftextMI = sftextMI.replace(/ඝේ/g, "f>a");
sftextMI = sftextMI.replace(/ඛේ/g, "fÄ");
sftextMI = sftextMI.replace(/ළේ/g, "f<a");
sftextMI = sftextMI.replace(/ඟේ/g, "fša");
sftextMI = sftextMI.replace(/ණේ/g, "fKa");
sftextMI = sftextMI.replace(/ඵේ/g, "fMa");
sftextMI = sftextMI.replace(/ඨේ/g, "fGa");
sftextMI = sftextMI.replace(/ඬේ/g, "f¸");
sftextMI = sftextMI.replace(/ශේ/g, "fYa");
sftextMI = sftextMI.replace(/ඥේ/g, "f{a");
sftextMI = sftextMI.replace(/ඳේ/g, "f|a");
sftextMI = sftextMI.replace(/ක්‍ෂේ/g, "fÌa");
sftextMI = sftextMI.replace(/බේ/g, "fÅ");
sftextMI = sftextMI.replace(/චේ/g, "fÉ");
sftextMI = sftextMI.replace(/ඩේ/g, "fâ");
sftextMI = sftextMI.replace(/ෆේ/g, "f*");
sftextMI = sftextMI.replace(/ගේ/g, "f.a");
sftextMI = sftextMI.replace(/හේ/g, "fya");
sftextMI = sftextMI.replace(/පේ/g, "fma");
sftextMI = sftextMI.replace(/කේ/g, "fla");
sftextMI = sftextMI.replace(/ලේ/g, "f,a");
sftextMI = sftextMI.replace(/මේ/g, "fà");
sftextMI = sftextMI.replace(/නේ/g, "fka");
sftextMI = sftextMI.replace(/ජේ/g, "f–");
sftextMI = sftextMI.replace(/දේ/g, "foa");
sftextMI = sftextMI.replace(/රේ/g, "frA");
sftextMI = sftextMI.replace(/සේ/g, "fia");
sftextMI = sftextMI.replace(/ටේ/g, "fÜ");
sftextMI = sftextMI.replace(/වේ/g, "fï");
sftextMI = sftextMI.replace(/තේ/g, "f;a");
sftextMI = sftextMI.replace(/භේ/g, "fNa");
sftextMI = sftextMI.replace(/යේ/g, "fha");
sftextMI = sftextMI.replace(/ඤේ/g, "f[a");
sftextMI = sftextMI.replace(/ධේ/g, "fè");
sftextMI = sftextMI.replace(/ථේ/g, "f:a");
sftextMI = sftextMI.replace(/ෂෙ/g, "fI");
sftextMI = sftextMI.replace(/ඹෙ/g, "fU");
sftextMI = sftextMI.replace(/ඓ/g, "ft");
sftextMI = sftextMI.replace(/ඡෙ/g, "fP");
sftextMI = sftextMI.replace(/ඪෙ/g, "fV");
sftextMI = sftextMI.replace(/ඝෙ/g, "f>");
sftextMI = sftextMI.replace(/ඛෙ/g, "fn");
sftextMI = sftextMI.replace(/ළෙ/g, "f<");
sftextMI = sftextMI.replace(/ඟෙ/g, "fš");
sftextMI = sftextMI.replace(/ණෙ/g, "fK");
sftextMI = sftextMI.replace(/ඵෙ/g, "fM");
sftextMI = sftextMI.replace(/ඨෙ/g, "fG");
sftextMI = sftextMI.replace(/ඬෙ/g, "f~");
sftextMI = sftextMI.replace(/ශෙ/g, "fY");
sftextMI = sftextMI.replace(/ඥෙ/g, "f{");
sftextMI = sftextMI.replace(/ඳෙ/g, "fË");
sftextMI = sftextMI.replace(/ක්‍ෂෙ/g, "fÌ");
sftextMI = sftextMI.replace(/බෙ/g, "fn");
sftextMI = sftextMI.replace(/චෙ/g, "fp");
sftextMI = sftextMI.replace(/ඩෙ/g, "fv");
sftextMI = sftextMI.replace(/ෆෙ/g, "f*");
sftextMI = sftextMI.replace(/ගෙ/g, "f.");
sftextMI = sftextMI.replace(/හෙ/g, "fy");
sftextMI = sftextMI.replace(/ජෙ/g, "fc");
sftextMI = sftextMI.replace(/කෙ/g, "fl");
sftextMI = sftextMI.replace(/ලෙ/g, "f,");
sftextMI = sftextMI.replace(/මෙ/g, "fu");
sftextMI = sftextMI.replace(/නෙ/g, "fk");
sftextMI = sftextMI.replace(/පෙ/g, "fm");
sftextMI = sftextMI.replace(/දෙ/g, "fo");
sftextMI = sftextMI.replace(/රෙ/g, "fr");
sftextMI = sftextMI.replace(/සෙ/g, "fi");
sftextMI = sftextMI.replace(/ටෙ/g, "fg");
sftextMI = sftextMI.replace(/වෙ/g, "fj");
sftextMI = sftextMI.replace(/තෙ/g, "f;");
sftextMI = sftextMI.replace(/භෙ/g, "fN");
sftextMI = sftextMI.replace(/යෙ/g, "fh");
sftextMI = sftextMI.replace(/ඤෙ/g, "f[");
sftextMI = sftextMI.replace(/ධෙ/g, "fO");
sftextMI = sftextMI.replace(/ථෙ/g, "f:");
sftextMI = sftextMI.replace(/තු/g, ";=");
sftextMI = sftextMI.replace(/ගු/g, ".=");
sftextMI = sftextMI.replace(/කු/g, "l=");
sftextMI = sftextMI.replace(/තූ/g, ";+");
sftextMI = sftextMI.replace(/ගූ/g, ".+");
sftextMI = sftextMI.replace(/කූ/g, "l+");
sftextMI = sftextMI.replace(/රු/g, "re");
sftextMI = sftextMI.replace(/රූ/g, "rE");
sftextMI = sftextMI.replace(/ආ/g, "wd");
sftextMI = sftextMI.replace(/ඇ/g, "we");
sftextMI = sftextMI.replace(/ඈ/g, "wE");
sftextMI = sftextMI.replace(/ඌ/g, "W!");
sftextMI = sftextMI.replace(/ඖ/g, "T!");
sftextMI = sftextMI.replace(/ඒ/g, "ta");
sftextMI = sftextMI.replace(/ඕ/g, "´");
sftextMI = sftextMI.replace(/ඳි/g, "¢");
sftextMI = sftextMI.replace(/ඳී/g, "£");
sftextMI = sftextMI.replace(/දූ/g, "¥");
sftextMI = sftextMI.replace(/දී/g, "°");
sftextMI = sftextMI.replace(/ලූ/g, "¡");
sftextMI = sftextMI.replace(/ර්‍ය/g, "©");
sftextMI = sftextMI.replace(/ඳූ/g, "ª");
sftextMI = sftextMI.replace(/ර්/g, "rA");
sftextMI = sftextMI.replace(/ඨි/g, "Gs");
sftextMI = sftextMI.replace(/ඨී/g, "GS");
sftextMI = sftextMI.replace(/ඡී/g, "„");
sftextMI = sftextMI.replace(/ඛ්/g, "Ü");
sftextMI = sftextMI.replace(/ඛි/g, "ÿ");
sftextMI = sftextMI.replace(/ලු/g, "¢");
sftextMI = sftextMI.replace(/ඛී/g, "Ö");
sftextMI = sftextMI.replace(/දි/g, "†");
sftextMI = sftextMI.replace(/ච්/g, "ý");
sftextMI = sftextMI.replace(/ජ්/g, "–");
sftextMI = sftextMI.replace(/රී/g, "¯");
sftextMI = sftextMI.replace(/ඪී/g, "VS");
sftextMI = sftextMI.replace(/ඪී/g, "VsS");
sftextMI = sftextMI.replace(/චි/g, "î");
sftextMI = sftextMI.replace(/ථී/g, ":S");
sftextMI = sftextMI.replace(/ථී/g, ":S");
sftextMI = sftextMI.replace(/ජී/g, "„");
sftextMI = sftextMI.replace(/චී/g, "ì");
sftextMI = sftextMI.replace(/ඞ්/g, "Xs");
sftextMI = sftextMI.replace(/ඵී/g, "MS");
sftextMI = sftextMI.replace(/ට්/g, "ê");
sftextMI = sftextMI.replace(/ඵි/g, "Ms");
sftextMI = sftextMI.replace(/රි/g, "Ñ");
sftextMI = sftextMI.replace(/ටී/g, "ç");
sftextMI = sftextMI.replace(/ටි/g, "å");
sftextMI = sftextMI.replace(/ඩ්/g, "ö");
sftextMI = sftextMI.replace(/ඩී/g, "ô");
sftextMI = sftextMI.replace(/ඩි/g, "Æ");
sftextMI = sftextMI.replace(/ඬ්/g, "Š");
sftextMI = sftextMI.replace(/ඬි/g, "‹");
sftextMI = sftextMI.replace(/ධ්/g, "ù");
sftextMI = sftextMI.replace(/ඬී/g, "Œ");
sftextMI = sftextMI.replace(/ධි/g, "ò");
sftextMI = sftextMI.replace(/ධී/g, "û");
sftextMI = sftextMI.replace(/බි/g, "Å");
sftextMI = sftextMI.replace(/බ්/g, "æ");
sftextMI = sftextMI.replace(/බී/g, "É");
sftextMI = sftextMI.replace(/ම්/g, "à");
sftextMI = sftextMI.replace(/ජි/g, "‚");
sftextMI = sftextMI.replace(/මි/g, "â");
sftextMI = sftextMI.replace(/ඹ්/g, "é");
sftextMI = sftextMI.replace(/මී/g, "ä");
sftextMI = sftextMI.replace(/ඹි/g, "Ç");
sftextMI = sftextMI.replace(/ව්/g, "ï");
sftextMI = sftextMI.replace(/ඹී/g, "ü");
sftextMI = sftextMI.replace(/ඳු/g, "í");
sftextMI = sftextMI.replace(/ද්‍ර/g, "ø");
sftextMI = sftextMI.replace(/වී/g, "è");
sftextMI = sftextMI.replace(/වි/g, "ë");
sftextMI = sftextMI.replace(/ඞ්/g, "Š");		//1111111111
sftextMI = sftextMI.replace(/ඞී/g, "º");
sftextMI = sftextMI.replace(/ඡි/g, "Só");
sftextMI = sftextMI.replace(/ඡ්/g, "–þ");
sftextMI = sftextMI.replace(/දු/g, "¥");
sftextMI = sftextMI.replace(/ජ්/g, "–");
sftextMI = sftextMI.replace(/ර්‍ණ/g, "Ks");
sftextMI = sftextMI.replace(/ණී/g, "KS");
sftextMI = sftextMI.replace(/ජී/g, "„");
sftextMI = sftextMI.replace(/ඡි/g, "‰");
sftextMI = sftextMI.replace(/ඩි/g, "Æ");
sftextMI = sftextMI.replace(/ඤු/g, "C¥");
sftextMI = sftextMI.replace(/ග/g, ".");
sftextMI = sftextMI.replace(/ළු/g, "Û");
sftextMI = sftextMI.replace(/ෂ/g, "I");
sftextMI = sftextMI.replace(/ං/g, "x");
sftextMI = sftextMI.replace(/ඃ/g, "#");
sftextMI = sftextMI.replace(/ඹ/g, "U");
sftextMI = sftextMI.replace(/ඡ/g, "P");
sftextMI = sftextMI.replace(/ඪ/g, "V");
sftextMI = sftextMI.replace(/ඝ/g, ">");
sftextMI = sftextMI.replace(/ඊ/g, "B");
sftextMI = sftextMI.replace(/ඣ/g, "CO");
sftextMI = sftextMI.replace(/ඛ/g, "L");
sftextMI = sftextMI.replace(/ළ/g, "<");
sftextMI = sftextMI.replace(/ඟ/g, "š");
sftextMI = sftextMI.replace(/ණ/g, "K");
sftextMI = sftextMI.replace(/ඵ/g, "M");
sftextMI = sftextMI.replace(/ඨ/g, "G");
sftextMI = sftextMI.replace(/ඃ/g, "#");
sftextMI = sftextMI.replace(/\"/g, ",");
sftextMI = sftextMI.replace(/\//g, "$");
sftextMI = sftextMI.replace(/\)/g, "&");
sftextMI = sftextMI.replace(/:/g, "(");
sftextMI = sftextMI.replace(/-/g, ")");
sftextMI = sftextMI.replace(/ෆ/g, "*");
sftextMI = sftextMI.replace(/ල/g, ",");
sftextMI = sftextMI.replace(/-/g, "-");
sftextMI = sftextMI.replace(/රැ/g, "/");
sftextMI = sftextMI.replace(/ථ/g, ":");
sftextMI = sftextMI.replace(/ත/g, ";");
sftextMI = sftextMI.replace(/ළ/g, "<");
sftextMI = sftextMI.replace(/ඝ/g, ">");
sftextMI = sftextMI.replace(/රෑ/g, "?");
sftextMI = sftextMI.replace(/ඊ/g, "B");
sftextMI = sftextMI.replace(/ක‍/g, "C");
sftextMI = sftextMI.replace(/‍ෘ/g, "D");
sftextMI = sftextMI.replace(/ෑ/g, "E");
sftextMI = sftextMI.replace(/ත‍/g, "F");
sftextMI = sftextMI.replace(/ඨ/g, "G");
sftextMI = sftextMI.replace(/්‍ය/g, "H");
sftextMI = sftextMI.replace(/ෂ/g, "I");
sftextMI = sftextMI.replace(/න‍/g, "J");
sftextMI = sftextMI.replace(/ණ/g, "K");
sftextMI = sftextMI.replace(/ඛ/g, "L");
sftextMI = sftextMI.replace(/ඵ/g, "M");
sftextMI = sftextMI.replace(/භ/g, "N");
sftextMI = sftextMI.replace(/ධ/g, "O");
sftextMI = sftextMI.replace(/ඡ/g, "P");
sftextMI = sftextMI.replace(/ඍ/g, "R");
sftextMI = sftextMI.replace(/ඔ/g, "T");
sftextMI = sftextMI.replace(/ඹ/g, "U");
sftextMI = sftextMI.replace(/ඪ/g, "V");
sftextMI = sftextMI.replace(/උ/g, "W");
sftextMI = sftextMI.replace(/ශ/g, "Y");
sftextMI = sftextMI.replace(/ඤ/g, "[");
sftextMI = sftextMI.replace(/ඉ/g, "b");
sftextMI = sftextMI.replace(/ජ/g, "c");
sftextMI = sftextMI.replace(/ට/g, "g");
sftextMI = sftextMI.replace(/ය/g, "h");
sftextMI = sftextMI.replace(/ස/g, "i");
sftextMI = sftextMI.replace(/ව/g, "j");
sftextMI = sftextMI.replace(/න/g, "k");
sftextMI = sftextMI.replace(/ක/g, "l");
sftextMI = sftextMI.replace(/ප/g, "m");
sftextMI = sftextMI.replace(/බ/g, "n");
sftextMI = sftextMI.replace(/ද/g, "o");
sftextMI = sftextMI.replace(/ච/g, "p");
sftextMI = sftextMI.replace(/ර/g, "r");
sftextMI = sftextMI.replace(/එ/g, "t");
sftextMI = sftextMI.replace(/ම/g, "u");
sftextMI = sftextMI.replace(/ඩ/g, "v");
sftextMI = sftextMI.replace(/අ/g, "w");
sftextMI = sftextMI.replace(/හ/g, "y");
sftextMI = sftextMI.replace(/ඥ/g, "{");
sftextMI = sftextMI.replace(/ඳ/g, "|");
sftextMI = sftextMI.replace(/ක්‍ෂ/g, "Ì");
sftextMI = sftextMI.replace(/ැ/g, "e");
sftextMI = sftextMI.replace(/ෑ/g, "E");
sftextMI = sftextMI.replace(/ෙ/g, "f");
sftextMI = sftextMI.replace(/ු/g, "q");
sftextMI = sftextMI.replace(/ි/g, "s");
sftextMI = sftextMI.replace(/ූ/g, "Q");
sftextMI = sftextMI.replace(/ී/g, "S");
sftextMI = sftextMI.replace(/ෘ/g, "D");
sftextMI = sftextMI.replace(/ෲ/g, "DD");
sftextMI = sftextMI.replace(/ෟ/g, "!");
sftextMI = sftextMI.replace(/ා/g, "d");
sftextMI = sftextMI.replace(/්/g, "a");
sftextMI = sftextMI.replace(/￦/g, "\"");
sftextMI = sftextMI.replace(/￫/g, "^");
sftextMI = sftextMI.replace(/￩/g, "&");
sftextMI = sftextMI.replace(/ￔ/g, ")");
sftextMI = sftextMI.replace(/ￓ/g, "'");
sftextMI = sftextMI.replace(/ￒ/g, "`");
sftextMI = sftextMI.replace(/ￏ/g, "}");
sftextMI = sftextMI.replace(/ￎ/g, "~");
sftextMI = sftextMI.replace(/\ￍ/g, "¤");
sftextMI = sftextMI.replace(/\ￌ/g, "•");
sftextMI = sftextMI.replace(/\ￊ/g, "›");
sftextMI = sftextMI.replace(/\ﾶ/g, "∙");
sftextMI = sftextMI.replace(/ￕ/g, "]");
		
		document.txtBox.box3MI.value=sftextMI;
	}
	
