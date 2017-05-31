import { Table, Column, Model} from 'sequelize-typescript';

@Table
export default class seat_area extends Model<seat_area> {
    @Column
    line_num: number;

    @Column
    rank_num: number;

    @Column
    seat_state: number;

    static async updateSeat(seatID: number) {
        seat_area
            .update<seat_area>({
                seat_state: 2
            }, {where: {id: seatID}})
            .then(() => {});
    }

    static async getSeats() {
        return await seat_area.findAll<seat_area>();
    }
}