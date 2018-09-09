import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../objects/header-data';
import { UpdateData } from '../objects/update-data';

@Component({
    selector: 'gl-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    headerRows: HeaderData[] = [];
    outingDetails: HeaderData[] = [];
    displayedColumns: string[];
    updateDisplayedColumns: string[];
    updates: UpdateData[] = [];
    constructor() {}

    ngOnInit() {
        this.displayedColumns = ['description', 'contents'];
        this.updateDisplayedColumns = ['date', 'contents'];

        this.headerRows.push(
            {
                title: 'PRE-SEASON MTG',
                contents:
                    '	3-6-2018 - VFW 7pm 6pm if eating Ring Bell Memorial Park Post 764, 460 Valleybrook Road, McMurray, PA 15317 Click Here For Map'
            },
            {
                title: 'PRACTICE ROUNDS',
                contents: '4/3/2018 - 4/24/2018'
            },
            {
                title: 'OFFICIAL SEASON',
                contents: '5/1/2018 - 8/28/2018'
            },
            {
                title: 'PLAYOFF DATES',
                contents: '9/4/2018 - 9/18/2018'
            }
        );
        this.outingDetails.push(
            {
                title: 'WHEN',
                contents: '9/22/2018 (Saturday)'
            },
            {
                title: 'COURSE',
                contents: 'Lenape Heights Golf Course'
            },
            {
                title: 'CHECK-IN',
                contents: 'By 11:00am'
            },
            {
                title: 'COST',
                contents:
                    '$50 (includes cart, golf, hotdog and drink at turn, and meal at end)'
            },
            {
                title: 'PRIZES',
                contents:
                    'Closest to Pin/Longest Drives/Longest Putt prizes included'
            },
            {
                title: 'SKINS',
                contents: 'Optional(pay separately)'
            },
            {
                title: 'SIGN-UP',
                contents: '	GIVE MONEY TO EITHER LEAGUE OFFICERS ASAP!!!!'
            },
            {
                title: 'NOTE',
                contents:
                    'Cost should be discounted even less depending on how many are attending'
            }
        );

        this.updates.push(
            {
                date: '09/05/18',
                contents: 'GRATS TO OVERALL FLIGHT WINNERS!!!!'
            },
            {
                date: '08/29/18',
                contents:
                    'Second Half - Round 7 of 7 - Posted. GRATS TO SECOND HALF PLAYOFF WINNERS!!!!'
            },
            {
                date: '08/22/18',
                contents:
                    'Second Half - Round 6 of 7 - Posted. Next week is last week of season and then there are playoffs and the outing. Those that made/make the playoffs, pay attention as the schedule will be tight and we will need to get your rounds scheduled with your opponent ASAP.'
            },
            {
                date: '08/15/18',
                contents:
                    'League night for 8/14 was cancelled due to rain out. Due to date/time constraints, there will now only be 7 rounds second half. Scheduled matches for 8/14 will be pushed to next week. Skins payout for rain-out week will roll into remaining weeks thus the pay out goes up and is now roughly worth 122/week. See you next week.'
            },
            {
                date: '08/13/18',
                contents: 'Second Half - Round 5 of 8 - Posted.'
            },
            {
                date: '08/01/18',
                contents:
                    'League night for 7/31 was cancelled due to rain out. Due to date/time constraints, there will now only be 8 rounds second half. Round 5 of 8 will be next Tuesday. Scheduled matches for round 5 will be next week. Skins payout for rain-out week will roll into remaining weeks thus the pay out goes up. See you next week.'
            },
            {
                date: '07/30/18',
                contents: 'Second Half - Round 4 of 9 - Posted.'
            },
            {
                date: '07/18/18',
                contents: 'Second Half - Round 3 of 9 - Posted.'
            },
            {
                date: '07/11/18',
                contents: 'Second Half - Round 2 of 9 - Posted.'
            },
            {
                date: '07/04/18',
                contents: 'Second Half - Round 1 of 9 - Posted.'
            }
        );
    }
}
