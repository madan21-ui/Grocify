import { listGroceryItems } from "@/lib/server/db-action";

export async function GET() {       
    try {
        const items = await listGroceryItems();
        return Response.json({items})
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to fetch items"; 
    }
}