import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useCallback, useMemo, useState } from "react";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import Button from "./Button";

export const ChessGame = () => {
  const game = useMemo(() => new Chess(), []);
  const [fen, setFen] = useState(game.fen());
  
  interface Move {
    from: string;
    to: string;
    promotion: string | undefined;
  }

  const handleMove = useCallback(
    (move: Move) => {
      try {
        const result = game.move(move);
        setFen(game.fen());
        return result;
      } catch {
        return null;
      }
    },
    [game]
  );

  const onDrop = (source: Square, target: Square, piece: Piece): boolean => {
    let moveObject = {
      from: source as string,
      to: target as string,
      promotion: piece ? piece[1].toLowerCase() : undefined,
    };
    const res = handleMove(moveObject);
    console.log(game.fen())
    console.log(game.isGameOver());
    console.log(game.isStalemate());

    console.log(game.isCheck());
    if (res) {
      return true;
    }
    return false;
  };

  return (
    <div className="grid gap-4 w-[80%] md:w-[35%] mx-auto max-h-screen">
      <div className="flex gap-2 items-center">
        <div className="bg-red-600 w-12 h-12"></div>
        <div>
          <div>this is shit (500)</div>
          <div className="italic text-sm">Checked..</div>
        </div>
      </div>
      <Chessboard
        position={fen}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "4px",
        }}
        customDarkSquareStyle={{ backgroundColor: "#779952" }}
        customLightSquareStyle={{ backgroundColor: "#edeed1" }}
      />
      <div className="flex gap-2 items-center">
        <div className="bg-red-600 w-12 h-12"></div>
        <div>
          <div>this is shit (500)</div>
          <Button mode="primary" size={0.75} text="Give Up ?" />
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
