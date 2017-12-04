export class HireSchmodelClient {
  companyName: string;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventCountry: string;
  eventCity: string;
  roles: RoleView[];
  talents: TalentView[];

  constructor() {
    this.companyName = '';
    this.eventName = '';
    this.eventStartDate = '';
    this.eventEndDate = '';
    this.eventCountry = '';
    this.eventCity = '';
    this.roles = new Array<RoleView>();
    this.talents = new Array<TalentView>();
  }
}

export class RoleView {
  id: number;
  name: string;

  constructor() {
    this.id = 0;
    this.name = '';
  }
}

export class TalentView {
  id: number;
  firstName: string;
  billingCompanyName: string;
  applications: ApplicationView[];
  hired: boolean;
  photoUrl: string;

  constructor() {
    this.id = 0;
    this.firstName = '';
    this.billingCompanyName = '';
    this.applications = new Array<ApplicationView>();
    this.hired = false;
    this.photoUrl = '';
  }
}

export class ApplicationView {
  id: number;
  roleId: number;
  clauses: string[];
  pay: number;
  liked: boolean;

  constructor() {
    this.id = 0;
    this.roleId = 0;
    this.clauses = new Array<string>();
    this.pay = 0;
    this.liked = false;
  }
}
