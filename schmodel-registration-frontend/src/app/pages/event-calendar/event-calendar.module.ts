import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventCalendarComponent } from './event-calendar.component';
import { EventCalendarRoutingModule } from './event-calendar-routing.module';

@NgModule({
    imports: [
        EventCalendarRoutingModule,
        RouterModule
    ],
    declarations: [EventCalendarComponent]
})
export class EventCalendarModule {}
