import { expect } from "chai";
import "mocha";

import Board from "./board";
import Rules from "./rules";

describe("Rules Tests", () => {
  it('getAvaiblableColumns -top for "1|1" on 3x3 Board', () => {
    const board = new Board({ x: 3, y: 3 });
    const availableColumn = new Rules(board).getAvaiblableColumns("1|1", {
      top: true,
      stepCount: 1,
    });

    expect(availableColumn).to.deep.equal(["0|1"]);
  });

  it('getAvaiblableColumns -bottom for "1|1" on 3x3 Board', () => {
    const board = new Board({ x: 3, y: 3 });
    const availableColumn = new Rules(board).getAvaiblableColumns("1|1", {
      bottom: true,
      stepCount: 1,
    });

    expect(availableColumn).to.deep.equal(["2|1"]);
  });

  it('getAvaiblableColumns -left for "1|1" on 3x3 Board', () => {
    const board = new Board({ x: 3, y: 3 });
    const availableColumn = new Rules(board).getAvaiblableColumns("1|1", {
      left: true,
      stepCount: 1,
    });

    expect(availableColumn).to.deep.equal(["1|0"]);
  });

  it('getAvaiblableColumns -right for "1|1" on 3x3 Board', () => {
    const board = new Board({ x: 3, y: 3 });
    const availableColumn = new Rules(board).getAvaiblableColumns("1|1", {
      right: true,
      stepCount: 1,
    });

    expect(availableColumn).to.deep.equal(["1|2"]);
  });

  it('getAvaiblableColumns -linear for "1|1" on 3x3 Board', () => {
    const board = new Board({ x: 3, y: 3 });
    const availableColumn = new Rules(board).getAvaiblableColumns("1|1", {
      stepCount: 1,
      linear: true,
    });

    expect(availableColumn).to.deep.equal(["0|1", "2|1", "1|0", "1|2"]);
  });

  it('getAvaiblableColumns -angular for "1|1" on 3x3 Board', () => {
    const board = new Board({ x: 3, y: 3 });
    const availableColumn = new Rules(board).getAvaiblableColumns("1|1", {
      stepCount: 1,
      angular: true,
    });

    expect(availableColumn).to.deep.equal(["0|0", "0|2", "2|0", "2|2"]);
  });
});
