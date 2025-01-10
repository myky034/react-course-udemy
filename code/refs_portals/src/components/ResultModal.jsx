import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  result,
  targetTimer,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedReamingTime = (remainingTime / 1000).toFixed(2);
  const scroe = Math.round((1 - remainingTime / (targetTimer * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {scroe}</h2>}
      <p>
        The target time was <strong>{targetTimer} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedReamingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
