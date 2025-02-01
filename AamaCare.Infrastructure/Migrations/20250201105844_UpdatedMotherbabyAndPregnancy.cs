using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AamaCare.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedMotherbabyAndPregnancy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "MotherId",
                table: "Pregnancies",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Babies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PregnancyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Babies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Babies_Pregnancies_PregnancyId",
                        column: x => x.PregnancyId,
                        principalTable: "Pregnancies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CheckupReminders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PregnancyId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DueDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Desscription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CheckupReminders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CheckupReminders_Pregnancies_PregnancyId",
                        column: x => x.PregnancyId,
                        principalTable: "Pregnancies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Mothers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mothers", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pregnancies_MotherId",
                table: "Pregnancies",
                column: "MotherId");

            migrationBuilder.CreateIndex(
                name: "IX_Babies_PregnancyId",
                table: "Babies",
                column: "PregnancyId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CheckupReminders_PregnancyId",
                table: "CheckupReminders",
                column: "PregnancyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pregnancies_Mothers_MotherId",
                table: "Pregnancies",
                column: "MotherId",
                principalTable: "Mothers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pregnancies_Mothers_MotherId",
                table: "Pregnancies");

            migrationBuilder.DropTable(
                name: "Babies");

            migrationBuilder.DropTable(
                name: "CheckupReminders");

            migrationBuilder.DropTable(
                name: "Mothers");

            migrationBuilder.DropIndex(
                name: "IX_Pregnancies_MotherId",
                table: "Pregnancies");

            migrationBuilder.DropColumn(
                name: "MotherId",
                table: "Pregnancies");
        }
    }
}
