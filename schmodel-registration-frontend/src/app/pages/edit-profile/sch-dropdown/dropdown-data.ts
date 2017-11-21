const months = {
  placeholder: 'Month',
  options: [
    {
      value: '01',
      text: 'January'
    },
    {
      value: '02',
      text: 'February'
    },
    {
      value: '03',
      text: 'March'
    },
    {
      value: '04',
      text: 'April'
    },
    {
      value: '05',
      text: 'May'
    },
    {
      value: '06',
      text: 'June'
    },
    {
      value: '07',
      text: 'July'
    },
    {
      value: '08',
      text: 'August'
    },
    {
      value: '09',
      text: 'September'
    },
    {
      value: '10',
      text: 'October'
    },
    {
      value: '11',
      text: 'November'
    },
    {
      value: '12',
      text: 'December'
    }
  ]
};

const days = {
  placeholder: 'Day',
  options: []
};

for (let i = 1; i <= 31; i ++) {
  days.options.push({
    value: ('0' + i).slice(-2),
    text: i
  })
}

const years = {
  placeholder: 'Year',
  options: []
};

for (let i = 1970; i <= 2000; i ++) {
  years.options.push({
    value: i,
    text: i
  })
}

const phonePrefixes = {
  placeholder: '',
  options: [{value:"93",text:"+93 (AF)"},{value:"355",text:"+355 (AL)"},{value:"213",text:"+213 (DZ)"},{value:"1",text:"+1 (AS)"},{value:"376",text:"+376 (AD)"},{value:"244",text:"+244 (AO)"},{value:"1",text:"+1 (AI)"},{value:"1",text:"+1 (AG)"},{value:"54",text:"+54 (AR)"},{value:"374",text:"+374 (AM)"},{value:"297",text:"+297 (AW)"},{value:"61",text:"+61 (AU)"},{value:"43",text:"+43 (AI)"},{value:"994",text:"+994 (AZ)"},{value:"973",text:"+973 (BH)"},{value:"880",text:"+880 (BD)"},{value:"1",text:"+1 (BB)"},{value:"375",text:"+375 (BY)"},{value:"32",text:"+32 (BE)"},{value:"501",text:"+501 (BZ)"},{value:"229",text:"+229 (BJ)"},{value:"1",text:"+1 (BM)"},{value:"975",text:"+975 (BT)"},{value:"591",text:"+591 (BO)"},{value:"387",text:"+387 (BA)"},{value:"267",text:"+267 (BW)"},{value:"55",text:"+55 (BR)"},{value:"246",text:"+246 (IO)"},{value:"1",text:"+1 (VG)"},{value:"673",text:"+673 (BN)"},{value:"359",text:"+359 (BG)"},{value:"226",text:"+226 (BF)"},{value:"95",text:"+95 (MM)"},{value:"257",text:"+257 (BI)"},{value:"855",text:"+855 (KH)"},{value:"237",text:"+237 (CM)"},{value:"1",text:"+1 (CA)"},{value:"238",text:"+238 (CV)"},{value:"1",text:"+1 (KY)"},{value:"236",text:"+236 (CF)"},{value:"235",text:"+235 (ID)"},{value:"56",text:"+56 (CL)"},{value:"86",text:"+86 (CN)"},{value:"57",text:"+57 (CO)"},{value:"269",text:"+269 (KM)"},{value:"682",text:"+682 (CK)"},{value:"506",text:"+506 (CR)"},{value:"225",text:"+225 (CI)"},{value:"385",text:"+385 (HR)"},{value:"53",text:"+53 (CU)"},{value:"357",text:"+357 (CY)"},{value:"420",text:"+420 (CZ)"},{value:"243",text:"+243 (CD)"},{value:"45",text:"+45 (DK)"},{value:"253",text:"+253 (DJ)"},{value:"1",text:"+1 (DM)"},{value:"1",text:"+1 (DO)"},{value:"593",text:"+593 (EC)"},{value:"20",text:"+20 (EG)"},{value:"503",text:"+503 (SV)"},{value:"240",text:"+240 (GQ)"},{value:"291",text:"+291 (ER)"},{value:"372",text:"+372 (EE)"},{value:"251",text:"+251 (ET)"},{value:"500",text:"+500 (FK)"},{value:"298",text:"+298 (FO)"},{value:"691",text:"+691 (FM)"},{value:"679",text:"+679 (FJ)"},{value:"358",text:"+358 (FI)"},{value:"33",text:"+33 (FR)"},{value:"594",text:"+594 (GF)"},{value:"689",text:"+689 (PF)"},{value:"241",text:"+241 (GA)"},{value:"995",text:"+995 (GE)"},{value:"49",text:"+49 (DE)"},{value:"233",text:"+233 (GH)"},{value:"350",text:"+350 (GI)"},{value:"30",text:"+30 (GR)"},{value:"299",text:"+299 (GL)"},{value:"1",text:"+1 (GD)"},{value:"590",text:"+590 (GP)"},{value:"1",text:"+1 (GU)"},{value:"502",text:"+502 (GT)"},{value:"224",text:"+224 (GN)"},{value:"245",text:"+245 (GW)"},{value:"592",text:"+592 (GY)"},{value:"509",text:"+509 (HT)"},{value:"504",text:"+504 (HN)"},{value:"852",text:"+852 (HK)"},{value:"36",text:"+36 (HU)"},{value:"354",text:"+354 (IS)"},{value:"91",text:"+91 (IN)"},{value:"62",text:"+62 (ID)"},{value:"98",text:"+98 (IR)"},{value:"964",text:"+964 (IQ)"},{value:"353",text:"+353 (IE)"},{value:"972",text:"+972 (IL)"},{value:"39",text:"+39 (IT)"},{value:"1",text:"+1 (JM)"},{value:"81",text:"+81 (JP)"},{value:"962",text:"+962 (JO)"},{value:"7",text:"+7 (KZ)"},{value:"254",text:"+254 (KE)"},{value:"686",text:"+686 (KI)"},{value:"381",text:"+381 (XK)"},{value:"965",text:"+965 (KW)"},{value:"996",text:"+996 (KG)"},{value:"856",text:"+856 (LA)"},{value:"371",text:"+371 (LV)"},{value:"961",text:"+961 (LB)"},{value:"266",text:"+266 (LS)"},{value:"231",text:"+231 (LR)"},{value:"218",text:"+218 (LY)"},{value:"423",text:"+423 (LI)"},{value:"370",text:"+370 (LT)"},{value:"352",text:"+352 (LU)"},{value:"853",text:"+853 (MO)"},{value:"389",text:"+389 (MK)"},{value:"261",text:"+261 (MG)"},{value:"265",text:"+265 (MW)"},{value:"60",text:"+60 (MY)"},{value:"960",text:"+960 (MV)"},{value:"223",text:"+223 (ML)"},{value:"356",text:"+356 (MT)"},{value:"692",text:"+692 (MH)"},{value:"596",text:"+596 (MQ)"},{value:"222",text:"+222 (MR)"},{value:"230",text:"+230 (MU)"},{value:"262",text:"+262 (YT)"},{value:"52",text:"+52 (MX)"},{value:"373",text:"+373 (MD)"},{value:"377",text:"+377 (MC)"},{value:"976",text:"+976 (MN)"},{value:"382",text:"+382 (ME)"},{value:"1",text:"+1 (MS)"},{value:"212",text:"+212 (MA)"},{value:"258",text:"+258 (MZ)"},{value:"264",text:"+264 (NA)"},{value:"674",text:"+674 (NR)"},{value:"977",text:"+977 (NP)"},{value:"31",text:"+31 (NL)"},{value:"599",text:"+599 (AN)"},{value:"687",text:"+687 (NC)"},{value:"64",text:"+64 (NZ)"},{value:"505",text:"+505 (NI)"},{value:"227",text:"+227 (NE)"},{value:"234",text:"+234 (NG)"},{value:"683",text:"+683 (NU)"},{value:"672",text:"+672 (NF)"},{value:"850",text:"+850 (KP)"},{value:"1",text:"+1 (MP)"},{value:"47",text:"+47 (NO)"},{value:"968",text:"+968 (OM)"},{value:"92",text:"+92 (PK)"},{value:"680",text:"+680 (PW)"},{value:"970",text:"+970 (PS)"},{value:"507",text:"+507 (PA)"},{value:"675",text:"+675 (PG)"},{value:"595",text:"+595 (PY)"},{value:"51",text:"+51 (PE)"},{value:"63",text:"+63 (PH)"},{value:"48",text:"+48 (PL)"},{value:"351",text:"+351 (PT)"},{value:"1",text:"+1 (PR)"},{value:"974",text:"+974 (QA)"},{value:"242",text:"+242 (CG)"},{value:"262",text:"+262 (RE)"},{value:"40",text:"+40 (RO)"},{value:"7",text:"+7 (RU)"},{value:"250",text:"+250 (RW)"},{value:"590",text:"+590 (BL)"},{value:"290",text:"+290 (SH)"},{value:"1",text:"+1 (KN)"},{value:"590",text:"+590 (MF)"},{value:"508",text:"+508 (PM)"},{value:"1",text:"+1 (VC)"},{value:"685",text:"+685 (WS)"},{value:"378",text:"+378 (SM)"},{value:"239",text:"+239 (ST)"},{value:"966",text:"+966 (SA)"},{value:"221",text:"+221 (SN)"},{value:"381",text:"+381 (RS)"},{value:"248",text:"+248 (SC)"},{value:"232",text:"+232 (SL)"},{value:"65",text:"+65 (SG)"},{value:"421",text:"+421 (SK)"},{value:"386",text:"+386 (SI)"},{value:"677",text:"+677 (SB)"},{value:"252",text:"+252 (SO)"},{value:"27",text:"+27 (ZA)"},{value:"82",text:"+82 (KR)"},{value:"34",text:"+34 (ES)"},{value:"94",text:"+94 (LK)"},{value:"1",text:"+1 (LC)"},{value:"249",text:"+249 (SD)"},{value:"597",text:"+597 (SR)"},{value:"268",text:"+268 (SZ)"},{value:"46",text:"+46 (SE)"},{value:"41",text:"+41 (CH)"},{value:"963",text:"+963 (SY)"},{value:"886",text:"+886 (TW)"},{value:"992",text:"+992 (TJ)"},{value:"255",text:"+255 (TZ)"},{value:"66",text:"+66 (TH)"},{value:"1",text:"+1 (BS)"},{value:"220",text:"+220 (GM)"},{value:"670",text:"+670 (TL)"},{value:"228",text:"+228 (TG)"},{value:"690",text:"+690 (TK)"},{value:"676",text:"+676 (TO)"},{value:"1",text:"+1 (TT)"},{value:"216",text:"+216 (TN)"},{value:"90",text:"+90 (TR)"},{value:"993",text:"+993 (TM)"},{value:"1",text:"+1 (TC)"},{value:"688",text:"+688 (TV)"},{value:"256",text:"+256 (UG)"},{value:"380",text:"+380 (UA)"},{value:"971",text:"+971 (AE)"},{value:"44",text:"+44 (GB)"},{value:"1",text:"+1 (US)"},{value:"598",text:"+598 (UY)"},{value:"1",text:"+1 (VI)"},{value:"998",text:"+998 (UZ)"},{value:"678",text:"+678 (VU)"},{value:"39",text:"+39 (VA)"},{value:"58",text:"+58 (VE)"},{value:"84",text:"+84 (VN)"},{value:"681",text:"+681 (WF)"},{value:"967",text:"+967 (YE)"},{value:"260",text:"+260 (ZM)"},{value:"263",text:"+263 (ZW)"}]
};

export {
  months,
  days,
  years,
  phonePrefixes
};
