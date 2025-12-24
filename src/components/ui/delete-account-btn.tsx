"use client";

import * as React from "react";
import { deleteAccount } from "@/actions/user.action";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose, // <-- Import this
} from "@/components/ui/dialog";

export default function DeleteAccountButton() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteAccount();
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error("Delete account failed:", err);
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] w-full">
        <DialogHeader>
          <DialogTitle>Delete Your Account</DialogTitle>
          <DialogDescription>
            This action is <strong>permanent</strong>. All your data will be
            deleted and cannot be recovered.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end space-x-2">
          {/* Cancel Button that closes the dialog */}
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          {/* Delete button */}
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Account"}
          </Button>
        </DialogFooter>

        {/* Optional: Close (X) button in top-right corner */}
       
      </DialogContent>
    </Dialog>
  );
}
