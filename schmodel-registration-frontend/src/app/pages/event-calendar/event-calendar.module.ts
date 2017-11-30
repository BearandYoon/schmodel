import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventCalendarComponent } from './event-calendar.component';
import { EventCalendarRoutingModule } from './event-calendar-routing.module';
import { ProfileService } from '../../core/services';

@NgModule({
    imports: [
        EventCalendarRoutingModule,
        RouterModule
    ],
    declarations: [EventCalendarComponent],
    providers: [
        ProfileService
    ]
})
export class EventCalendarModule {}
