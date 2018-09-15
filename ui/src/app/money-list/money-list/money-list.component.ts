import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

const MONEYLIST = [
    {
        rank: 1,
        member: 'Peters, Matt',
        lowPuttsWon: 1,
        lowPuttsTotal: '$10',
        driveWon: '',
        driveTotal: '',
        longPuttsWon: '',
        longPuttsTotal: '',
        pinWon: 1,
        pinTotal: '$10',
        skinsWon: 3,
        skinsTotal: '$175.5',
        playOffsWon: '',
        playoffsTotal: '',
        totalWon: '$195.50'
    },
    {
        rank: 2,
        member: 'Bruce, Robert Allan',
        lowPuttsWon: 3,
        lowPuttsTotal: '$12',
        driveWon: '1',
        driveTotal: '10',
        longPuttsWon: '',
        longPuttsTotal: '',
        pinWon: 1,
        pinTotal: '10',
        skinsWon: 3,
        skinsTotal: '$71.02',
        playOffsWon: 1,
        playoffsTotal: '$20',
        totalWon: '$123.02'
    },
    {
        rank: 3,
        member: 'Marynchak, Darren',
        lowPuttsWon: '',
        lowPuttsTotal: '',
        driveWon: '`',
        driveTotal: '',
        longPuttsWon: '',
        longPuttsTotal: '',
        pinWon: '',
        pinTotal: '',
        skinsWon: 3,
        skinsTotal: '$114.72',
        playOffsWon: '',
        playoffsTotal: '',
        totalWon: '$114.72'
    },
    {
        rank: 4,
        member: 'Welsch, Woody',
        pinWon: 2,
        pinTotal: '$20',
        skinsWon: 2,
        skinsTotal: '$81.94',
        totalWon: '$101.94'
    },
    {
        rank: 5,
        member: 'Hast, Michael',
        driveWon: 1,
        driveTotal: '$10',
        skinsWon: 2,
        skinsTotal: '$38.24',
        playoffsWon: 2,
        playOffsTotal: '$45',
        totalWon: '$93.24'
    }
    // { rank: 6, member: 'Amick JR., Douglas.C.'	1	$10	2	$20	 	 	1	$10	2	$47.12	 	 	$87.12
    // { rank: 7, member: 'Opferman, Donald JR'	 	 	1	$10	 	 	1	$10	1	$65.55	 	 	$85.55
    // { rank: 8, member: 'Scully, Dan'	 	 	1	$10	 	 	 	 	2	$65.56	 	 	$75.56
    // { rank: 9, member: 'Betarie, Steven'	 	 	 	 	2	$20	1	$10	 	 	2	$45	$75
    // { rank: 10, member: 'Opferman, Donald SR'	1	$2	5	$50	1	$10	1	$10	 	 	 	 	$72
    // { rank: 11, member: 'Petrini, Robert'	 	 	 	 	 	 	1	$10	1	$16.39	2	$45	$71.39
    // { rank: 12, member: 'Parker, Ryan'	1	$5	4	$40	 	 	1	$10	1	$16.39	 	 	$71.39
    // { rank: 13, member: 'Petrone, Jerry'	1	$2	 	 	 	 	1	$10	2	$38.24	1	$20	$70.24
    // { rank: 14, member: 'Witt, David'	 	 	1	$10	 	 	2	$20	1	$16.39	1	$20	$66.39
    // { rank: 15, member: 'Linck, Ken'	 	 	1	$10	 	 	1	$10	1	$21.85	1	$20	$61.85
    // { rank: 16, member: 'Wisniewski, Larry'	 	 	3	$30	 	 	 	 	1	$30.73	 	 	$60.73
    // { rank: 17, member: 'Hinch, Harry'	 	 	 	 	 	 	1	$10	2	$49.17	 	 	$59.17
    // { rank: 18, member: 'Ryan, Doug'	 	 	 	 	2	$20	 	 	2	$38.24	 	 	$58.24
];

@Component({
    selector: 'gl-money-list',
    templateUrl: './money-list.component.html',
    styleUrls: ['./money-list.component.css']
})
export class MoneyListComponent implements OnInit {
    gridOptions: GridOptions = {
        enableSorting: true,
        gridAutoHeight: true
    } as GridOptions;

    moneyList;
    constructor() {}

    ngOnInit() {
        this.gridOptions.columnDefs = this.createColumns();
        this.moneyList = MONEYLIST;
        this.gridOptions.rowData = this.moneyList;
        this.gridOptions.onGridReady = params => this.gridReady(params);
    }

    gridReady(params) {
        //   params.gridOptions.api.sizeColumnsToFit();
    }

    createColumns() {
        return [
            {
                headerName: 'Rank',
                field: 'rank',
                width: 95
            },
            {
                headerName: 'Member',
                field: 'member'
            },
            {
                headerName: 'Lowest Putts',
                children: [
                    {
                        headerName: 'Times Won',
                        field: 'lowPuttsWon',
                        width: 130
                    },
                    { headerName: 'Total', field: 'lowPuttsTotal', width: 95 }
                ]
            },
            {
                headerName: 'Longest Drive',
                children: [
                    { headerName: 'Times Won', field: 'driveWon' },
                    { headerName: 'Total', field: 'driveTotal' }
                ]
            },
            {
                headerName: 'Longest Putts',
                children: [
                    { headerName: 'Times Won', field: 'longPuttsWon' },
                    { headerName: 'Total', field: 'longPuttsTotal' }
                ]
            },
            {
                headerName: 'Closest To Pin',
                children: [
                    { headerName: 'Times Won', field: 'pinWon' },
                    { headerName: 'Total', field: 'pinTotal' }
                ]
            },
            {
                headerName: 'Skins',
                children: [
                    { headerName: 'Times Won', field: 'skinsWon' },
                    { headerName: 'Total', field: 'skinsTotal' }
                ]
            },
            {
                headerName: 'Playoffs',
                children: [
                    { headerName: 'Times Won', field: 'playoffsWon' },
                    { headerName: 'Total', field: 'playOffsTotal' }
                ]
            },
            {
                headerName: 'Total Won',
                field: 'totalWon'
            }
        ];
    }
}
