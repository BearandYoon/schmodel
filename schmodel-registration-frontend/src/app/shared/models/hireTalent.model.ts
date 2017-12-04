export class HireTalent {
  companyName: string;
  talentName: string;
  eventDate: string;
  country: string;
  city: string;
  position: string;
  pay_rate: string;
  clauses: string[];

  constructor() {
    this.companyName = '';
    this.talentName = '';
    this.eventDate = '';
    this.country = '';
    this.city = '';
    this.position = '';
    this.pay_rate = '';
    this.clauses = new Array<string>();
  }
}
