class Game {
  public id: number | undefined;
  constructor(
    public title: string,
    public imageURL: string,
    public link: string,
    public isPlayer1Ready: boolean,
    public isPlayer2Ready: boolean
  ) {}
}
export default Game;
