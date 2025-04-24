using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dts_challenge.Server.Migrations
{
    /// <inheritdoc />
    public partial class DeleteColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CaseworkTasks");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CaseworkTasks",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
